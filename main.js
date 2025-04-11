import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { generateWorld } from './worldGenerator.js';
import { setupControls } from './controls.js';
import { setupCrafting } from './crafting.js';
import { createAnimals } from '../games/animals.js';
import { initSound } from './soundManager.js';

// 创建场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

// 生成世界
generateWorld(scene);

// 设置相机初始位置
camera.position.z = 5;
camera.position.y = 2;

// 设置轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 设置自定义控制
setupControls(camera, controls);

// 设置工具制作栏
setupCrafting();

// 创建动物
createAnimals(scene);

// 初始化声音
initSound(scene);

// 渲染循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
    
