function drawThirdDay() {
    const markers = [];

    // 협재칼국수, 레일바이크, 제주공항근처
    var positions = [
        [33.39680387719257, 126.24455635894998],
        [33.46433134089257, 126.83661941111174],
        [33.50906428878105, 126.49313556374678],
    ];

    var markerPositions = [];
    var customOverlays = [];

    for (var i = 0; i < positions.length; i++) {
        markerPositions.push(new kakao.maps.LatLng(positions[i][0], positions[i][1]));
    }

    var imageSrc = 'image/marker3.svg', // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var content_info = [
        {
            title: '1. 협재칼국수 (셋째 날)',
            img: 'image/house.svg',
            info: '시원~한 국물로 시작',
            address: '한림읍 협재로 3',
        },
        {
            title: '2. 레일바이크',
            img: 'image/house.svg',
            info: '박상의 PICK! ⭐',
            address: '제주시 구좌읍 종달리 4639',
        },
        {
            title: '3. 제주공항근처 점심',
            img: 'image/house.svg',
            info: '상황봐서 결정',
            address: '제주시 공항로 2',
        },
    ];

    var contents = [];

    for (var i = 0; i < content_info.length; i++) {
        var content =
            '<div class="wrap" onclick="zoomHome()">' +
            '    <div class="info">' +
            '        <div class="title third">' +
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