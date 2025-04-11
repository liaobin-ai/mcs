import * as THREE from 'three';

export function initSound(scene) {
    // 创建音频监听器
    const listener = new THREE.AudioListener();
    const camera = scene.children.find(child => child instanceof THREE.PerspectiveCamera);
    camera.add(listener);

    // 背景音乐
    const backgroundSound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('../sounds/background_music.mp3', function (buffer) {
        backgroundSound.setBuffer(buffer);
        backgroundSound.setLoop(true);
        backgroundSound.setVolume(0.5);
        backgroundSound.play();
    });

    // 动物声音
    const animalSound = new THREE.PositionalAudio(listener);
    audioLoader.load('../sounds/animal_sound.mp3', function (buffer) {
        animalSound.setBuffer(buffer);
        animalSound.setRefDistance(20);
        const animal = scene.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.SphereGeometry);
        if (animal) {
            animal.add(animalSound);
        }
    });
}
    
