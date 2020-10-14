let map;


let mylat = 25.0414;
let mylng = 121.5364;


// 台北市政府經緯度
// 25.0375465,121.562244

// 臺中市政府經緯度
// 24.1618329,120.6118442

// 高雄市政府經緯度
// 22.651917,120.2611587


function setLatLng(cityname) {
    if (cityname == 'taipei') {
        mylat = 25.0375465;
        mylng = 121.562244;
        initMap();
    }
    if (cityname == 'taichung') {
        mylat = 24.1618329;
        mylng = 120.6118442;
        initMap();
    }
    if (cityname == 'kaohsiung') {
        mylat = 22.651917;
        mylng = 120.2611587;
        initMap();
    }


}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: mylat,
            lng: mylng
        },
        zoom: 15
    });
    let url = 'https://raw.githubusercontent.com/sandyuu/FileStorage/master/getmaskstock.json';
    let xhr = new XMLHttpRequest();
    //把資料拿出來用
    xhr.onload = function () {
        //字串變物件
        var data = JSON.parse(this.responseText)

        //alert(1230);
        // alert(data.features[0].geometry.coordinates[0]);


        // Create markers.
        for (var i = 0; i < data.features.length; i++) {
            var mylat = data.features[i].geometry.coordinates[1];
            var mylng = data.features[i].geometry.coordinates[0];

            var mypotitions = new google.maps.LatLng(mylat, mylng);
            var maskLeft = data.features[i].properties.masksLeft;
            var childMasksLeft = data.features[i].properties.childMasksLeft;
            if ((maskLeft + childMasksLeft) != 0) {
                var imgpath = 'img/pharmacy.png';
            } else {
                var imgpath = 'img/empty.png';
            }

            var marker = new google.maps.Marker({
                position: mypotitions,
                icon: imgpath,
                map: map
            });
        };
    }

    xhr.open('GET', url);
    xhr.send();




    // Markers放圖釘
    var marker = new google.maps.Marker({
        position: {
            lat: 25.0414,
            lng: 121.5364
        },
        map: map,
        title: 'Hello World!'
    });
}