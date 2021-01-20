<template>
  <div id="drag-test" class="drag" @mousedown="move">
    <h3>拖拽</h3>
    <p>{{ positionX }} {{ positionY }}</p>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      positionX: 0,
      positionY: 0,

    };
  },

  components: {},

  created () { },

  methods: {
    move (e) {
      let odiv = e.target; //获取目标元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;

        //移动当前元素
        odiv.style.left = left + 'px';
        odiv.style.top = top + 'px';
      };
      document.onmouseup = (e) => {
        console.log(e.clientX, e.clientY)
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  },

}

</script>
<style lang='css' scoped>
.drag {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 200px;
  background: #efefef;
}
</style>