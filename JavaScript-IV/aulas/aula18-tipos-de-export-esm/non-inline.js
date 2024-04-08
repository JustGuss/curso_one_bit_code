function group(){
    console.log('Export nomeado não-inline (agrupado)');
}

function exportDefault(){
    console.log('Export default não-inline');
}

function a(){};
function b(){};
function c(){};

export { group, a, b, c };

export default exportDefault;