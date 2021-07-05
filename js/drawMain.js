function drawMain() {
    $('.container_btn_start').hide();
    $('.img_family').hide();
    var content =
        '<div class="wrap">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            글램핑클럽레스피아-홍천' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="image/house.svg" width="73" height="70">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="ellipsis">길현픽 4순위(168,000₩ + 30,000₩)</div>' +
        '                <div class="jibun ellipsis">강원도 홍천군 북방면</div>' +
        '                <div><a href="http://lespia.co.kr/fhtml/?intro=OK" target="_blank" class="link">다들</a></div>' +
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
}