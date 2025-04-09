import * as THREE from 'three';

export class Entity {
    constructor(scene, position) {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.copy(position);
        scene.add(this.mesh);
    }
}
    
