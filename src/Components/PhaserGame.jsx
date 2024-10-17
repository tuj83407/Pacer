import React, { useEffect } from 'react';
import Phaser from 'phaser';

const PhaserGame = () => {
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false,
                },
            },
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);
        let player;
        let bullets;
        let bulletTime = 0;
        let resumeSections;

        function preload() {
            this.load.image('background', 'background.png');
            this.load.image('player', 'pingu.png');
        }

        function create() {
            // Tile the background
            this.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'background').setOrigin(0, 0);

            // Create player sprite
            player = this.physics.add.image(window.innerWidth / 2, window.innerHeight / 2, 'player');
            player.setScale(0.1); // Resize the player sprite

            bullets = this.physics.add.group({
                classType: Phaser.GameObjects.Image,
                maxSize: 50,
                runChildUpdate: true,
            });

            resumeSections = this.physics.add.group();
            createHeaders(this); // Create headers

            // Keyboard input for movement
            this.cursors = this.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                right: Phaser.Input.Keyboard.KeyCodes.D,
            });
        }

        function update() {
            // Movement controls
            const speed = 200; // Speed of the player
            player.setVelocity(0); // Reset velocity

            if (this.cursors.up.isDown) {
                player.setVelocityY(-speed);
            } else if (this.cursors.down.isDown) {
                player.setVelocityY(speed);
            }

            if (this.cursors.left.isDown) {
                player.setVelocityX(-speed);
            } else if (this.cursors.right.isDown) {
                player.setVelocityX(speed);
            }

            // Shooting bullets
            if (this.input.activePointer.isDown) {
                shootBullet(this);
            }
        }

        function createHeaders(scene) {
            const headers = [
                { name: 'Experience', content: 'Worked at Company A\nWorked at Company B\nInternship at Company C' },
                { name: 'Education', content: 'B.Sc. in Computer Science\nM.Sc. in Software Engineering' },
                { name: 'Skills', content: 'JavaScript\nReact\nPhaser\nNode.js' },
                { name: 'Projects', content: 'Project A\nProject B\nProject C' },
            ];
        
            const startX = 100; // Starting X position
            const startY = 50; // Y position for headers
        
            headers.forEach((header, index) => {
                // Create the header text object
                const headerText = scene.add.text(startX + index * 150, startY, header.name, {
                    font: '20px Arial',
                    fill: '#ffffff',
                    backgroundColor: '#000000',
                }).setInteractive();
        
                // Store content directly as a property for easy access later
                headerText.content = header.content;
        
                // Add a custom name property
                headerText.customName = header.name; // Assign the custom name here
        
                resumeSections.add(headerText); // Add header to the physics group
        
                scene.physics.add.overlap(bullets, headerText, (bullet, header) => {
                    hitResumeSection(bullet, header);
                });
            });
        }
        



        function shootBullet(scene) {
            const bulletSpeed = 600;
            if (scene.time.now > bulletTime) {
                bulletTime = scene.time.now + 100;

                const bullet = bullets.get().setTexture('player');
                if (bullet) {
                    bullet.setActive(true);
                    bullet.setVisible(true);
                    bullet.setPosition(player.x, player.y);
                    scene.physics.world.enable(bullet);
                    const angle = Phaser.Math.Angle.Between(player.x, player.y, scene.input.x, scene.input.y);
                    bullet.body.setVelocity(Math.cos(angle) * bulletSpeed, Math.sin(angle) * bulletSpeed);
                    bullet.setScale(0.1); // Adjust this scale factor as needed
                }
            }
        }

        function hitResumeSection(bullet, headerText) {
            console.log('Is headerText a text object?', headerText instanceof Phaser.GameObjects.Text);
            bullet.setActive(false); // Hide bullet after hit
            bullet.setVisible(false);
            console.log('Bullet hit header:', headerText);
            // Remove the header after hit
            headerText.setActive(false);
            headerText.setVisible(false);
            resumeSections.remove(headerText); // Remove from the physics group

            // Check if content is defined before scattering
            if (headerText.content) {
                scatterDetails(this, headerText.x, headerText.content);
            } else {
                console.error('Content is undefined for header:', headerText.text);
            }
        }

        function scatterDetails(scene, headerX, content) {
            const details = content.split('\n'); // Split content into lines
            const startY = 100; // Position details below the header
            const minX = 0; // Minimum X position
            const maxX = window.innerWidth; // Maximum X position

            details.forEach((line, index) => {
                const detailText = scene.add.text(
                    Phaser.Math.Between(minX, maxX), // Random X position across the screen
                    startY + (index * 30), // Position each detail below the header
                    line,
                    {
                        font: '14px Arial',
                        fill: '#ffffff',
                        backgroundColor: '#000000',
                        padding: { x: 10, y: 10 },
                    }
                ).setInteractive(); // Make the details interactive

                // Adding the detail text to the physics group
                scene.physics.add.existing(detailText); // Enable physics on the detail text
                detailText.body.immovable = true; // Make detail text immovable

                scene.physics.add.overlap(bullets, detailText, (bullet, detailText) => {
                    bullet.setActive(false); // Hide bullet on hit
                    bullet.setVisible(false);
                    scatterWords(scene, detailText.x, detailText.y, line); // Scatter words
                    detailText.setActive(false); // Hide detail text
                    detailText.setVisible(false);
                });
            });
        }

        function scatterWords(scene, startX, startY, text) {
            const words = text.split(' '); // Split the line into words

            words.forEach((word) => {
                const wordText = scene.add.text(
                    startX, // Keep the X position from the details
                    startY, // Keep the Y position from the details
                    word,
                    {
                        font: '14px Arial',
                        fill: '#ffffff',
                        backgroundColor: '#000000',
                    }
                );

                // Enable physics for the word
                scene.physics.add.existing(wordText);

                // Calculate random velocity direction
                const angle = Phaser.Math.Between(0, 360);
                const speed = 200; // Speed of the scattered words
                wordText.body.setVelocity(Math.cos(Phaser.Math.DegToRad(angle)) * speed, Math.sin(Phaser.Math.DegToRad(angle)) * speed);

                // Add an update check to remove the word when it goes off-screen
                scene.time.addEvent({
                    delay: 100, // Check every 100 ms
                    callback: () => {
                        if (wordText.x < 0 || wordText.x > window.innerWidth || wordText.y < 0 || wordText.y > window.innerHeight) {
                            wordText.destroy(); // Remove it from the scene
                        }
                    },
                    callbackScope: wordText,
                    loop: true, // Repeat the check
                });
            });
        }

        return () => {
            game.destroy(true); // Clean up the game instance
        };
    }, []);

    return (
        <div>
            <p>Welcome to my interactive portfolio. Enjoy the game!</p>
            <div id="gameContainer" style={{ width: '100vw', height: '100vh' }} />
        </div>
    );
};

export default PhaserGame;
