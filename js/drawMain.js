function drawMain() {
    $('.container_btn_start').hide();
    $('.img_family').hide();
    var content =
        '<div class="wrap" onclick="zoomHome()">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            우리가 잘 곳' +
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
        yAnchor: 0.9
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    customOverlay.setMap(map);
    var moveLatLon = new kakao.maps.LatLng(33.39889736609703, 126.24597169811791);
    
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
}