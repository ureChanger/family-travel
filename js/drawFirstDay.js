function drawFirstDay() {
    const markers = [];

    // 제주항공, 제주마당, 쇠소깍카약, 국수바다, 다퍼주는횟집
    var positions = [
        [33.50906428878105, 126.49313556374678],
        [33.49818478438646, 126.45817699013881],
        [33.252845156002614, 126.62302464450421],
        [33.258691118795866, 126.40607094552188],
        [33.403529476985895, 126.25946665191215],
    ];

    var markerPositions = [];
    var customOverlays = [];

    for (var i = 0; i < positions.length; i++) {
        markerPositions.push(new kakao.maps.LatLng(positions[i][0], positions[i][1]));
    }

    var imageSrc = 'image/marker1.svg', // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var content_info = [
        {
            title: '1. 제주공항 (첫째 날)',
            img: 'image/house.svg',
            info: '오전 10시 도착',
            address: '제주시 공항로 2',
        },
        {
            title: '2. 제주마당',
            img: 'image/house.svg',
            info: '아침 - 갈치조림',
            address: '제주시 이호일동 663-1',
        },
        {
            title: '3. 쇠소깍 카약',
            img: 'image/house.svg',
            info: '오후 - 액티비티',
            address: '서귀포시 하효동 994-1',
        },
        {
            title: '4. 국수바다',
            img: 'image/house.svg',
            info: '점심 - 고기국수',
            address: '서귀포시 색달동 2130',
        },
        {
            title: '5. 다퍼주는횟집 포장',
            img: 'image/house.svg',
            info: '저녁 - 회&딱새우',
            address: '제주시 조천읍 함와로 22',
        },
    ];

    var contents = [];

    for (var i = 0; i < content_info.length; i++) {
        var content =
            '<div class="wrap" onclick="zoomHome()">' +
            '    <div class="info">' +
            '        <div class="title first">' +
            content_info[i].title +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="' +
            content_info[i].img +
            '"width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">' +
            content_info[i].info +
            '</div>' +
            '                <div class="jibun ellipsis">' +
            content_info[i].address +
            '</div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        contents.push(content);
    }

    var sellectedMarker = null;
    var sellectedCustom = null;

    for (var i = 0; i < markerPositions.length; i++) {
        var marker = new kakao.maps.Marker({
            position: markerPositions[i],
            image: markerImage,
        });

        var customOverlay = new kakao.maps.CustomOverlay({
            position: markerPositions[i],
            content: contents[i],
            xAnchor: 0.3,
            yAnchor: 0.9,
        });

        if (i == 0) {
            sellectedMarker = marker;
            sellectedCustom = customOverlay;
        }

        markers.push(marker);
        customOverlays.push(customOverlay);
    }

    var markers_total = [markers, customOverlays];

    return markers_total;
}