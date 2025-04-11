import * as THREE from 'three';

export function createAnimals(scene) {
    const textureLoader = new THREE.TextureLoader();
    const animalTexture = textureLoader.load('../textures/animal_texture.png');

    const animalGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const animalMaterial = new THREE.MeshBasicMaterial({ map: animalTexture });

    const numAnimals = 5;
    for (let i = 0; i < numAnimals; i++) {
        const animal = new THREE.Mesh(animalGeometry, animalMaterial);
        animal.position.x = Math.random() * 10 - 5;
        animal.position.z = Math.random() * 10 - 5;
        scene.add(animal);
    }
}
    
