var markerPosition = new kakao.maps.LatLng(33.39889736609703, 126.24597169811791);

var imageSrc = 'image/location-pin.svg', // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
    markerPosition = new kakao.maps.LatLng(33.39889736609703, 126.24597169811791); // 마커가 표시될 위치입니다

var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
});

marker.setMap(map);

var content =
    '<div class="wrap" onclick="zoomHome()">' +
    '    <div class="info">' +
    '        <div class="title home">' +
    '            터치해주세요!' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img">' +
    '                <img src="image/house.svg" width="73" height="70">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">숙소: 하늘고래화이트</div>' +
    '                <div class="jibun ellipsis">제주시 한림읍 협재리</div>' +
    '                <div><a href="https://blog.naver.com/skygorae" target="_blank" class="link">바로가기</a></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

var position = new kakao.maps.LatLng(33.39889736609703, 126.24597169811791);

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: 0.3,
    yAnchor: 0.9,
});

// 마커가 지도 위에 표시되도록 설정합니다
customOverlay.setMap(map);

marker.setMap(null);
customOverlay.setMap(null);

function reDrawMarker() {
    $('.container_btn_start').hide();
    $('.img_family').hide();
    marker.setMap(map);
    customOverlay.setMap(map);
    var moveLatLon = new kakao.maps.LatLng(33.39889736609703, 126.24597169811791);

    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
}

localStorage.setItem('home', '1');

kakao.maps.event.addListener(marker, 'click', function () {
    if (localStorage.getItem('home') == '1') {
        customOverlay.setMap(null);
        console.log('사라짐');
        localStorage.setItem('home', '0');
    } else {
        customOverlay.setMap(map);
        localStorage.setItem('home', '1');
    }
});

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map, markers) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

const markers_home = [marker, customOverlay];
const markers_first = drawFirstDay();
const markers_second = drawSecondDay();
const markers_third = drawThirdDay();

var positions = [[], [], []];
var markers_total = [markers_first, markers_second, markers_third];

for (var i = 0; i < markers_total.length; i++) {
    for (var j = 0; j < markers_total[i][0].length; j++) {
        positions[i].push(markers_total[i][0][j].getPosition());
    }
}
console.log(positions[0]);

const path_first = drawLine(positions[0]);
const path_second = drawLine(positions[1]);
const path_third = drawLine(positions[2]);

$('#menu_1').attr('onclick', 'showMarkers(1);');
$('#togo_1').attr('onclick', 'showMarkers(2);');
$('#togo_2').attr('onclick', 'showMarkers(3);');
$('#togo_3').attr('onclick', 'showMarkers(4);');

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers(idx) {
    console.log('보여주기 시작');
    hideMarkers(idx);
    const markers = setStack_show(idx);
    for (var i = 0; i < markers.length; i++) {
        for (var j = 0; j < markers[i].length; j++) {
            markers[i][j].setMap(map);
        }
    }
    switch (idx) {
        case 1:
            break;
        case 2:
            map.setLevel(6);
            path_first.setMap(map);
            break;
        case 3:
            map.setLevel(1);
            path_second.setMap(map);
            break;
        case 4:
            map.setLevel(4);
            path_third.setMap(map);
            break;
    }

    if (idx != 1) {
        var firstMarkerPosition = markers[0][0].getPosition();
        var moveLatLon = new kakao.maps.LatLng(
            firstMarkerPosition.getLat(),
            firstMarkerPosition.getLng()
        );

        // 지도 중심을 부드럽게 이동시킵니다
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
        map.panTo(moveLatLon);
    } else {
        var moveLatLon = new kakao.maps.LatLng(33.39889736609703, 126.24597169811791);

        // 지도 중심을 부드럽게 이동시킵니다
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
        map.panTo(moveLatLon);
    }
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers(idx) {
    const markers = setStack_hide(idx);
    var path_hide = [];
    switch(idx){
        case 1:
            break;
        case 2:
            path_hide = [path_second, path_third];
            break;
        case 3:
            path_hide = [path_first, path_third];
            break;
        case 4:
            path_hide = [path_first, path_second];
            break;
    }
    for (var i = 0; i < path_hide.length; i++){
        path_hide[i].setMap(null);
    }
    for (var i = 0; i < markers.length; i++) {
        for (var j = 0; j < markers[i].length; j++) {
            for (var k = 0; k < markers[i][j].length; k++) {
                markers[i][j][k].setMap(null);
            }
        }
    }
}

function setStack_hide(idx) {
    if (idx == 1) {
        const stack_1 = [];
        return stack_1;
    } else if (idx == 2) {
        const stack_2 = [[markers_home], markers_second, markers_third];
        return stack_2;
    } else if (idx == 3) {
        const stack_3 = [[markers_home], markers_first, markers_third];
        return stack_3;
    } else if (idx == 4) {
        const stack_4 = [[markers_home], markers_first, markers_second];
        return stack_4;
    }
}

function setStack_show(idx) {
    if (idx == 1) {
        const stack_1 = markers_home;
        return stack_1;
    } else if (idx == 2) {
        const stack_2 = markers_first;
        return stack_2;
    } else if (idx == 3) {
        const stack_3 = markers_second;
        return stack_3;
    } else if (idx == 4) {
        const stack_4 = markers_third;
        return stack_4;
    }
}

function drawLine(positions) {
    var linePath = [];
    for (var i = 0; i < positions.length; i++) {
        linePath.push(positions[i]);
    }

    // 지도에 표시할 선을 생성합니다
    var polyline = new kakao.maps.Polyline({
        path: linePath, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 5, // 선의 두께 입니다
        strokeColor: '#FFAE00', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일입니다
    });

    return polyline;
}