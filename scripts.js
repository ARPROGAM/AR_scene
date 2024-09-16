function changeModel() {
    const modelEntity = document.querySelector('a-entity[gltf-model]');
    modelEntity.setAttribute('gltf-model', 'https://new-link-to-your-second-model.glb');
}
