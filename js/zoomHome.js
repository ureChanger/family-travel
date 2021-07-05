function zoomHome(){
    // 지도를 1레벨 내립니다 (지도가 확대됩니다)
    map.setLevel(3);
    var moveLatLon = new kakao.maps.LatLng(33.39889736609703, 126.24597169811791);

    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);

    $('.btn_togo').show();
    $('.title').html('우리가 잘 곳!!!');
}