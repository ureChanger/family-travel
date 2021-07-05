function zoomHome(){
      var level = map.getLevel();
    
    // 지도를 1레벨 내립니다 (지도가 확대됩니다)
    map.setLevel(3);
    
    // 지도 레벨을 표시합니다
    displayLevel();
}