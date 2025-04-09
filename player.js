import * as THREE from 'three';

export class Player {
    constructor(scene) {
        this.geometry = new THREE.SphereGeometry(0.5, 32, 32);
        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.mesh);
    }

    move(x, y, z) {
        this.mesh.position.set(x, y, z);
    }
}
    
