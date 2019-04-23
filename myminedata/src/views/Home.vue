<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  methods: {
    getData() {
      minemap.domainUrl = 'http://minedata.cn';
      minemap.dataDomainUrl = 'http://datahive.minedata.cn';
      minemap.spriteUrl = 'http://minedata.cn/minemapapi/v2.0.0/sprite/sprite';
      minemap.serviceUrl = 'http://minedata.cn/service';
      minemap.accessToken = 'e89bf6e70f814efbb0ef3bae19a5f037';
      minemap.solution = 11761;
      console.log('here');

      /**
       * 初始化地图实例
       */
      const map = new minemap.Map({
        container: 'map',
        style: 'http://minedata.cn/service/solu/style/id/11761' /* 底图样式 */,
        center: [116.46, 39.92] /* 地图中心点 */,
        zoom: 10 /* 地图默认缩放等级 */,
        pitch: 0 /* 地图俯仰角度 */,
        maxZoom: 17 /* 地图最大缩放等级 */,
        minZoom: 3, /* 地图最小缩放等级 */
      });
      map.setCenter([116.46, 39.92]);
      map.setZoom(16);
      map.addControl(new minemap.Navigation(), 'bottom-right');
      map.addControl(new minemap.Scale(), 'top-right');
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
