new Vue({
    el:'.wrapper',
    data:{
        column1:[
            {title: 'Дизайн и брендинг', box1:'img/instagram.svg', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Разработка приложений', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Дизайн и брендинг', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Дизайн и брендинг', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
        ],
        column2:[
            {title: 'Веб разработка', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Автоматизация бизнеса', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Дизайн и брендинг', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Дизайн и брендинг', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
        ],
        column3:[
            {title: 'Веб разработка', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Автоматизация бизнеса', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Дизайн и брендинг', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
            {title: 'Дизайн и брендинг', box1:'', box2:'', box3:'', el1:'', el2:'', el3:'', el4:'',},
        ],
        elHidden: document.querySelector('.phone__container2').offsetWidth + 'px',
        wheel_sc1_deltaY: "onWheel_s2",
        scrollTop: 0,
        touchm_sc1_pageX: 0,
        touchs_sc1_pageX: 0,
        touchm_scc2_pageX: 0,
        touchs_scc2_pageX: 0,
    },
    methods:{
        onWheel_sc1: function (){
            this.elHidden = '0px';
        },
        onWheel_scc2: function(e){
            deltaY = e.deltaY
            this.wheel_sc1_deltaY = deltaY
            if(this.wheel_sc1_deltaY < 0  && this.scrollTop == 0){
                this.elHidden = document.querySelector('.phone__container2').offsetWidth + 'px';
            }
        },
        onScroll_scc2: function(){
            var section2 = document.querySelector('.section:nth-child(2) .section__container1 .section__container2')
            var html = document.documentElement;
            var scrollTop = html.scrollTop || section2 && section2.scrollTop || 0;
            scrollTop -= html.clientTop;
            this.scrollTop = scrollTop
        },
        onTouchStart_sc1: function(e){
            this.touchs_sc1_pageX = e.touches[0].pageX
        },
        onTouchMove_sc1: function(e){
            this.touchm_sc1_pageX = e.touches[0].pageX
            if(this.touchs_sc1_pageX-130 > this.touchm_sc1_pageX){
            this.elHidden = "0px";
            }
        },
        onTouchStart_scc2: function(e){
            this.touchs_scc2_pageX = e.touches[0].pageX
        },
        onTouchMove_scc2: function(e){
            this.touchm_scc2_pageX = e.touches[0].pageX
            if(this.touchs_scc2_pageX+130 < this.touchm_scc2_pageX){
            this.elHidden = document.querySelector('.phone__container2').offsetWidth + 'px';
            }
        },
    },
});