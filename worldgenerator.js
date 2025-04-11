import * as THREE from 'three';
import { readFileSync } from 'fs'; // 仅在 Node.js 环境，浏览器中需要用其他方式读取文件
import path from 'path';

export function generateWorld(scene) {
    try {
        const worldFilePath = path.join(__dirname, '../worlds/world1.json');
        const worldData = JSON.parse(readFileSync(worldFilePath, 'utf8'));

        const textureLoader = new THREE.TextureLoader();
        const blockTexture = textureLoader.load('../textures/block_texture.png');

        worldData.blocks.forEach((block) => {
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ map: blockTexture });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(block.x, block.y, block.z);
            scene.add(cube);
        });
    } catch (error) {
        console.error('Error generating world:', error);
    }
}
    
