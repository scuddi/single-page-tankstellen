
let tankstellen = [];

async function fetchData() {
    const response = await fetch("https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson")
    const data = await response.json();
    tankstellen = data.features.map(f => ({
        adresse: f.attributes.adresse
    }));
    renderTable(tankstellen);
}

function renderTable(data) {
    const tbody = document.getElementById("tableBody")
    tbody.innerHTML = data.map(t => `<tr><td>${t.adresse}</td></tr>`).join("");
}

fetchData();