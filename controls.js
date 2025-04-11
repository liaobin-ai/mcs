export function setupControls(camera, controls) {
    let isTopView = false;
    window.addEventListener('keydown', (event) => {
        if (event.key === 'F5') {
            isTopView = !isTopView;
            if (isTopView) {
                camera.position.set(camera.position.x, 10, camera.position.z);
                camera.lookAt(0, 0, 0);
            } else {
                camera.position.set(camera.position.x, 2, camera.position.z);
            }
        }
    });
}
    
