!function(){
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTage = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval( ()=>{
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTage.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n >= code.lenght){
                window.clearInterval(id)
            }
        },20)
    }
    let code = `
      /*
      * 首先，需要准备皮卡丘的皮
      */
      .preview{
        background: #FEE433;
      }
      /*
      * 接下来，画皮卡丘的鼻子
      */
      .nose{
        width: 0px;
        height: 0px;
        position: absolute;
        margin-left: -12px;
        border-radius: 50%;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent transparent;      
        left: 50%;
        margin-top: 28px;
      }
      /*
      * 接下来，画皮卡丘的眼睛
      */
      .eye{
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius:50%;
        border: 2px solid #000000;
      }
      /*
      * 眼睛里面的珠子
      */
      .eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
      }
      /*
      * 左眼在左边（废话）
      */
      .eye.left{
        right: 50%;
        margin-right: 90px;
      }
      /*
      * 右眼在右边（废话）
      */
      .eye.right{
        left: 50%;
        margin-left: 90px;
      }
      /*
      * 然后，画皮卡丘的脸
      */
      .face{
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        position: absolute;
        border-radius:50%;
        margin-top: 85px;
      }
      /*
      * 将脸放到正确的位置
      */
      .face.left{
        right: 50%;
        margin-right: 116px;
      }
      .face.right{
        left: 50%;
        margin-left: 116px;
      }
      /*
      * 上嘴唇
      */
      .upperLip{
        height: 22px;
        width: 80px;
        border: 3px solid black;
        position: absolute;
        top: 50px;
        background:#FEE433; 
        z-index: 1;
      }
      .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
        z-index: 1;
      }
      .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
      }
      /*
      * 下嘴唇
      */
      .lowerLip-wrapper{
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -150px;
        margin-bottom: -45px;
        height: 150px;
        overflow: hidden;
        width: 300px;
        transform: rotate(180deg)
      }
      .lowerLip{
        position: absolute;
        height: 4000px;
        width: 300px;
        background: #990513;
        border-radius: 150px/1400px;
        border: 2px solid black;
        overflow: hidden;
      }
      /*
      * 小舌头
      */
      .lowerLip::after{
        content:'';
        position: absolute;
        height: 120px;
        width: 130px;
        background: #FC4A62;
        left: 50%;
        margin-left: -63px;
        border-radius: 50%;      
      }
      /*

      * 好了，这只皮卡丘送给你(^-^)
      
      */
    `
    
    writeCode('',code)
}.call()