function drawSecondDay() {
    const markers = [];

    // 바다해찬, 협재해수욕장, 흑돼지바베큐, 협재돼지굽는정원
    var positions = [
        [33.39282337308163, 126.23984482510166],
        [33.394143976306886, 126.23984967327642],
        [33.39889232573577, 126.24597479811383],
        [33.3924099187108, 126.24059928827376],
    ];

    var markerPositions = [];
    var customOverlays = [];

    for (var i = 0; i < positions.length; i++) {
        markerPositions.push(new kakao.maps.LatLng(positions[i][0], positions[i][1]));
    }

    var imageSrc = 'image/marker2.svg', // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var content_info = [
        {
            title: '1. 바다해찬-해물뚝배기(둘째 날)',
            img: 'image/2-1.jpg',
            info: '아빠가 노래를 부름',
            address: '한림읍 한림해안로 326',
        },
        {
            title: '2. 협재해수욕장',
            img: 'image/2-2.jpg',
            info: '점심 - 2년만의 수영',
            address: '제주시 한림읍',
        },
        {
            title: '3. 흑돼지바베큐',
            img: 'image/2-3.jpg',
            info: '비 안올때 - 집',
            address: '협재 숙소',
        },
        {
            title: '4. 협재돼지굽는정원',
            img: 'image/2-4.jpg',
            info: '비 올 때 - 흑돼지',
            address: '한림읍 협재2길 8',
        },
    ];

    var contents = [];

    for (var i = 0; i < content_info.length; i++) {
        var content =
            '<div class="wrap" onclick="zoomHome()">' +
            '    <div class="info">' +
            '        <div class="title second">' +
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