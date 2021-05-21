new Vue({
    el:'#app',
    data:{
        inp1:'',
        inp2:'',
        inp3:'',
        inp4:'',
      sites:[
          {id:"M1A2",dai:"艾布拉姆斯", type:'主战坦克',counts:"60辆",state:"服役中"},
          {id:"“豹”2A6",dai:"豹", type:'主战坦克',counts:"40辆",state:"服役中"},
          {id:"-",dai:"“挑战者II”", type:'主战坦克',counts:"50辆",state:"服役中"},
          {id:"-",dai:"10式", type:'主战坦克',counts:"30辆",state:"服役中"},
          {id:"-",dai:"梅卡瓦MK3", type:'主战坦克',counts:"52辆",state:"服役中"},
          {id:"-",dai:"勒克莱尔", type:'主战坦克',counts:"20辆",state:"服役中"},
          {id:"M1A1",dai:"艾布拉姆斯", type:'主战坦克',counts:"260辆",state:"服役中"},
          {id:"CQ-S1",dai:"-", type:'轻型坦克',counts:"120辆",state:"服役中"},
          {id:"CR-U“0”型",dai:"-", type:'轮式步兵战车',counts:"220辆",state:"服役中"},
          {id:"CR-V“II”型",dai:"-", type:'轮式步兵装甲车',counts:"300辆",state:"服役中"},
          {id:"ZHLA-MX",dai:"-", type:'轮式装甲车',counts:"120辆",state:"服役中"},
          {id:"O1B3式",dai:"-", type:'自行高射炮',counts:"90辆",state:"服役中"},
          {id:"99式",dai:"-", type:'自行榴弹炮',counts:"49辆",state:"服役中"},
          {id:"-",dai:"“怒吼狮”/“怒吼狮-S”", type:'自行远程火箭炮',counts:"132辆",state:"服役中"},
          {id:"AH-64D",dai:"长弓阿帕奇", type:'武装直升机',counts:"64架",state:"服役中"},
          {id:"AH-1N",dai:"眼镜蛇", type:'武装攻击直升机',counts:"50架",state:"服役中"},
          {id:"UH-60M",dai:"黑鹰", type:'通用直升机',counts:"120架",state:"服役中"},
          {id:"CH-47N",dai:"支奴干", type:'全天候多功能中/重型运输直升机',counts:"54架",state:"服役中"},
          {id:"V-22",dai:"鱼鹰", type:'垂直起降倾转旋翼机',counts:"6架",state:"服役中"},
          {id:"PAC-2",dai:"爱国者II", type:'防空反导系统',counts:"10套",state:"服役中"},
          {id:"PAC-3",dai:"爱国者III", type:'防空反导系统',counts:"9套",state:"服役中"},
          {id:"EM-Z1",dai:"", type:'陆基激光防空炮',counts:"20套",state:"服役中"},
          {id:"EM-Z2",dai:"", type:'陆基电磁防空炮',counts:"17套",state:"服役中"},
          {id:"EMX-5F",dai:"", type:'陆基离子防空炮',counts:"18套",state:"服役中"},
          {id:"EML-7C",dai:"", type:'陆基量子反导系统',counts:"9套",state:"服役中"},
          
         
      ],
      sites2:[
          {id2:"F-15C/D",dai:"鹰", type:'高机动 全天候 重型空中优势战机',class:"主力战机",counts:"70架【C:40架 D:30架】",state:"服役中"},
          {id2:"F-15J/DJ",dai:"鹰/和平之鹰", type:'高机动 全天候 重型空中优势战机',class:"主力战机",counts:"50架【J:30架 DJ:20架】",state:"服役中"},
          {id2:"F-16C/D",dai:"战隼", type:'轻型空中优势多用途战机',class:"主力战机",counts:"100架【C:60架 D:40架】",state:"服役中"},
          {id2:"F/A-18A/B",dai:"大黄蜂", type:'超音速多用途战斗攻击机',class:"主力战机",counts:"26架",state:"已退役"},
          {id2:"Tornado",dai:"狂风", type:'音速变后掠翼战斗机轰炸机',class:"主力战机",counts:"21架",state:"已退役"},
          {id2:"Mirage-2000C",dai:"幻影", type:'单发三角翼多用途战斗机',class:"主力战机",counts:"36架",state:"已退役"},
          {id2:"F/A-18C/D",dai:"大黄蜂", type:'超音速多用途战斗攻击机',class:"主力战机",counts:"126架机【C:70架 D:56架】",state:"服役中"},
          {id2:"F-15I",dai:"雷电", type:'超音速战斗轰炸机',class:"主力战机",counts:"12架",state:"服役中"},
          {id2:"AFTI-16",dai:"蝰蛇", type:'轻型多用途空中优势战机',class:"主力战机",counts:"32架",state:"服役中"},
          {id2:"F-16XL",dai:"独立隼", type:'轻型多用途空中优势战机',class:"主力战机",counts:"20架",state:"服役中"},
          {id2:"F-16E/F",dai:"沙漠隼", type:'轻型多用途空中优势战机',class:"主力战机",counts:"50架【E:30架 F:20架】",state:"服役中"},
          {id2:"F-16IN",dai:"超级毒蛇", type:'轻型多用途空中优势战机',class:"主力战机",counts:"22架",state:"服役中"},
          {id2:"F-16V",dai:"毒蛇", type:'轻型多用途空中优势战机',class:"主力战机",counts:"12架",state:"服役中"},
          {id2:"F-15SG",dai:"先进鹰", type:'超音速战斗轰炸机',class:"主力战机",counts:"8架",state:"服役中"},
          {id2:"F-15SN",dai:"皇牌鹰", type:'轻型多用途空中优势战机',class:"主力战机",counts:"22架",state:"服役中"},
          {id2:"JAS-39C",dai:"鹰狮", type:'轻型多功能战机',class:"支援战机",counts:"70架",state:"服役中"},
          {id2:"F-2B",dai:"平成零战", type:'轻型多用途空中优势战机',class:"支援战机",counts:"20架",state:"服役中"},
          {id2:"F-35A",dai:"闪电II", type:'第五代隐身联合攻击战斗机',class:"王牌战机",counts:"40架",state:"服役中"},
          {id2:"Typhoon",dai:"台风", type:'高机动性多用途战机',class:"王牌战机",counts:"46架",state:"服役中"},
          {id2:"Rafale M",dai:"阵风", type:'全能通用型战机',class:"王牌战机",counts:"20架",state:"服役中"},
          {id2:"ELOZ-5000",dai:"超级光束狮", type:'全能通用型战机',class:"王牌战机",counts:"20架",state:"未服役"},
          {id2:"LC-001",dai:"闪电之狮", type:'电子战机',class:"特种作战飞机",counts:"60架",state:"服役中"},
          {id2:"EA-18G",dai:"咆哮者", type:'电子战机',class:"特种作战飞机",counts:"20架",state:"服役中"},
          {id2:"LC-002",dai:"沙漠之狮", type:'攻击机',class:"特种作战飞机",counts:"120架",state:"服役中"},
          {id2:"E-3B",dai:"望楼", type:'预警机',class:"特种作战飞机",counts:"34架",state:"服役中"},
          {id2:"E-2C",dai:"鹰眼", type:'预警机',class:"特种作战飞机",counts:"44架",state:"服役中"},
          {id2:"MV-200G",dai:"哺育者", type:'战略/战术运输机',class:"特种作战飞机",counts:"92架",state:"服役中"},
          {id2:"KC-135N",dai:"同温层油船", type:'空中加油机',class:"特种作战飞机",counts:"72架",state:"服役中"},
          {id2:"KC-767J",dai:"飞马", type:'空中加油机',class:"特种作战飞机",counts:"44架",state:"服役中"},
          {id2:"KC-10A",dai:"补充者", type:'空中加油机',class:"特种作战飞机",counts:"5架",state:"服役中"},
          {id2:"FLQ-4/4K",dai:"神秘鹤/敏捷鹤", type:'无人攻击机',class:"特种作战飞机",counts:"数百架",state:"服役中"},
          {id2:"DA-6E",dai:"萤火虫", type:'电子侦察机',class:"特种作战飞机",counts:"39架",state:"服役中"},
          {id2:"F-15E",dai:"打击鹰", type:'超音速战斗轰炸机',class:"战术打击战机",counts:"60架",state:"服役中"},
          
        ],
        sites3:[
          {id:'DDS-C2',dai:'“蓝天之神”号',type:'空天母舰',counts:'',class:'空岛级',state:'建造中'},
          {id:'DDS-C1',dai:'“空岛”号',type:'空天母舰',counts:'',class:'空岛级',state:'服役中'},
          {id:'DDA-111',dai:'“狮子座”号M型',type:'宙斯盾导弹驱逐舰',counts:'',class:'狮子座级',state:'服役中'},
          {id:'DDA-108',dai:'“牡羊座”号',type:'宙斯盾导弹驱逐舰',counts:'',class:'狮子座级',state:'服役中'},
          {id:'DDA-107',dai:'“威尔 肯罗迪”号',type:'宙斯盾导弹驱逐舰',counts:'',class:'狮子座级',state:'服役中'},
          {id:'DDA-106',dai:'“狮子座”号',type:'宙斯盾导弹驱逐舰',counts:'',class:'狮子座级',state:'服役中'},
          {id:'DDA-105',dai:'“大洋号”号',type:'导弹驱逐舰',counts:'',class:'尼兰斯级',state:'服役中'},
          {id:'DDA-104',dai:'“艾利 莫琳卡”号',type:'导弹驱逐舰',counts:'',class:'尼兰斯级',state:'服役中'},
          {id:'DDA-103',dai:'“南方之舟”号',type:'导弹驱逐舰',counts:'',class:'尼兰斯级',state:'服役中'},
          {id:'DDA-102',dai:'“太阳”号',type:'导弹驱逐舰',counts:'',class:'尼兰斯级',state:'服役中'},
          {id:'DDA-101',dai:'“西奥多 杰兰德”号',type:'导弹驱逐舰',counts:'',class:'尼兰斯级',state:'服役中'},
          {id:'DDA-100',dai:'“克尔 尼斯”号',type:'导弹驱逐舰',counts:'',class:'尼兰斯级',state:'服役中'},
          {id:'DDF-96',dai:'“托马斯 丘罗”号',type:'导弹巡洋舰',counts:'',class:'风级',state:'服役中'},
          {id:'DDF-95',dai:'“千露”号',type:'导弹巡洋舰',counts:'',class:'风级',state:'服役中'},
          {id:'DDF-94',dai:'“航行者”',type:'导弹巡洋舰',counts:'',class:'风级',state:'服役中'},
          {id:'DDF-93',dai:'“自由者”',type:'导弹巡洋舰',counts:'',class:'风级',state:'服役中'},
          {id:'DDF-92',dai:'“安尼尔”号',type:'导弹巡洋舰',counts:'',class:'风级',state:'服役中'},
          {id:'DDF-91',dai:'“风”号',type:'导弹巡洋舰',counts:'',class:'风级',state:'服役中'},
          {id:'DDP-RB',dai:'彩虹罩',type:'宙斯盾导弹护卫舰',counts:'6',class:'彩虹罩级',state:'服役中'},
          {id:'DDP-AW',dai:'南极之风',type:'导弹护卫舰',counts:'3',class:'南极之风级',state:'服役中'},
          {id:'DDP-G',dai:'守卫者',type:'导弹护卫舰',counts:'4',class:'守卫者级',state:'服役中'},
          {id:'DDP-UR',dai:'奥尔林达洲',type:'导弹护卫舰',counts:'4',class:'奥尔林达洲级',state:'服役中'},
          {id:'ASD-17',dai:'“圣乔比亚”号',type:'攻击型核潜艇/战术核潜艇',counts:'',class:'红海星级',state:'服役中'},
          {id:'ASD-16',dai:'“鹿尔林洲”号',type:'攻击型核潜艇/战术核潜艇',counts:'',class:'红海星级',state:'服役中'},
          {id:'ASD-15',dai:'“红海星”号',type:'攻击型核潜艇/战术核潜艇',counts:'',class:'红海星级',state:'服役中'},
          {id:'ASD-14',dai:'“超特急”号',type:'攻击型核潜艇/战术核潜艇',counts:'',class:'海鲸级',state:'服役中'},
          {id:'ASD-13',dai:'“双鱼座”号',type:'攻击型核潜艇/战术核潜艇',counts:'',class:'海鲸级',state:'服役中'},
          {id:'ASD-12',dai:'“宝瓶座”号',type:'攻击型核潜艇/战术核潜艇',counts:'',class:'海鲸级',state:'服役中'},
          {id:'ASD-11',dai:'“海鲸”号',type:'攻击型核潜艇/战术核潜艇',counts:'',class:'海鲸级',state:'服役中'},
          {id:'SSD-09',dai:'“神鱼”号',type:'常规动力潜艇',counts:'',class:'苍龙级',state:'服役中'},
          {id:'SSD-08',dai:'“海狮”号',type:'常规动力潜艇',counts:'',class:'苍龙级',state:'服役中'},
          {id:'SSD-07',dai:'“剑鱼”号',type:'常规动力潜艇',counts:'',class:'212A型',state:'服役中'},
          {id:'SSD-06',dai:'“海马”号',type:'常规动力潜艇',counts:'',class:'212A型',state:'服役中'},
          {id:'SSD-05',dai:'“潜伏者”号',type:'常规动力潜艇',counts:'',class:'潜伏者级',state:'服役中'},
          {id:'SSD-04',dai:'“鱼叉D”号',type:'常规动力潜艇',counts:'',class:'鱼叉级',state:'服役中'},
          {id:'SSD-03',dai:'“鱼叉C”号',type:'常规动力潜艇',counts:'',class:'鱼叉级',state:'服役中'},
          {id:'SSD-02',dai:'“鱼叉B”号',type:'常规动力潜艇',counts:'',class:'鱼叉级',state:'服役中'},
          {id:'SSD-01',dai:'“鱼叉A”号',type:'常规动力潜艇',counts:'',class:'鱼叉级',state:'服役中'},
          {id:'DDT-21',dai:'“巨蟹座”A型',type:'两栖输送登陆舰',counts:'',class:'巨蟹座级',state:'服役中'},
          {id:'DDT-22',dai:'“巨蟹座”B型',type:'两栖输送登陆舰',counts:'',class:'巨蟹座级',state:'服役中'},
          {id:'DDT-23',dai:'“巨蟹座”C型',type:'两栖输送登陆舰',counts:'',class:'巨蟹座级',state:'服役中'},
          {id:'DMS-(001~010)',dai:'捕食者(001~010)',type:'扫雷舰',counts:'',class:'捕食者级',state:'服役中'},
          {id:'',dai:'',type:'训练舰',counts:'若干',class:'',state:'服役中'},
          {id:'',dai:'',type:'巡逻艇',counts:'几十余艘',class:'',state:'服役中'},
          {id:'',dai:'',type:'补给舰',counts:'若干',class:'',state:'服役中'},
          {id:'LC-005',dai:'台风之狮',type:'超音速多用途战斗攻击机',counts:'86架',class:'',state:'服役中'},
          {id:'F/A-18E/F',dai:'超级大黄蜂',type:'超音速多用途战斗轰炸机',counts:'54架',class:'',state:'服役中'},
          {id:'F-15K',dai:'冲击鹰',type:'超音速多用途战斗轰炸机',counts:'20架',class:'',state:'服役中'},
          {id:'LC-003',dai:'速豚之狮',type:'海间攻击机',counts:'32架',class:'',state:'服役中'},
          {id:'F-2A',dai:'平成零战',type:'轻型空中优势多用途战机',counts:'40架',class:'',state:'服役中'},
          {id:'F-35C',dai:'闪电II',type:'第五代隐身联合攻击战斗机',counts:'12架',class:'',state:'服役中'},
          {id:'LC-001',dai:'闪电之狮',type:'电子战机',counts:'30架',class:'',state:'服役中'},
          {id:'E-2C',dai:'鹰眼',type:'预警机',counts:'12架',class:'',state:'服役中'},
          {id:'SH-60K',dai:'海鹰',type:'多用途反潜直升机',counts:'66架',class:'',state:'服役中'},
          {id:'P-3C',dai:'猎户座',type:'反潜巡逻机',counts:'30架',class:'',state:'服役中'},
          {id:'P-1',dai:'',type:'反潜巡逻机',counts:'10架',class:'',state:'服役中'},
        ],
        sites4:[
            {id:'DDAH-04',dai:'“斯特拉恩”号',type:'两栖攻击舰',class:'珊瑚II级',counts:'',state:'服役中'},
            {id:'DDAH-03',dai:'“南鹰”号',type:'两栖攻击舰',class:'珊瑚II级',counts:'',state:'服役中'},
            {id:'DDAH-02',dai:'“金岛”号',type:'两栖攻击舰',class:'珊瑚级',counts:'',state:'服役中'},
            {id:'DDAH-01',dai:'“珊瑚”号',type:'两栖攻击舰',class:'珊瑚级',counts:'',state:'服役中'},
            {id:'DDA-109',dai:'“乔巴 鲁尔曼”号',type:'宙斯盾导弹驱逐舰',class:'狮子座级',counts:'',state:'服役中'},
            {id:'DDA-110',dai:'“狮子座”号',type:'宙斯盾导弹驱逐舰',class:'尼兰斯级',counts:'',state:'服役中'},
            {id:'DDA-99',dai:'“大洋洲”号',type:'导弹驱逐舰',class:'尼兰斯级',counts:'',state:'服役中'},
            {id:'DDA-98',dai:'“丹”号',type:'导弹驱逐舰',class:'尼兰斯级',counts:'',state:'服役中'},
            {id:'DDA-97',dai:'“芬”号',type:'导弹驱逐舰',class:'尼兰斯级',counts:'',state:'服役中'},
            {id:'DDA-96',dai:'“新世”号',type:'导弹驱逐舰',class:'尼兰斯级',counts:'',state:'服役中'},
            {id:'DDA-95',dai:'“摩羯座”号',type:'导弹驱逐舰',class:'尼兰斯级',counts:'',state:'服役中'},
            {id:'DDP-UR3',dai:'“斯德麦尔”号',type:'导弹护卫舰',class:'奥尔林达洲II级',counts:'',state:'服役中'},
            {id:'DDP-UR2',dai:'“富兰克林 特肯尼”号',type:'导弹护卫舰',class:'奥尔林达洲II级',counts:'',state:'服役中'},
            {id:'DDP-UR1',dai:'“托比 布罗玛”号',type:'导弹护卫舰',class:'奥尔林达洲II级',counts:'',state:'服役中'},
            {id:'DDP-AW',dai:'“南极之风”号',type:'导弹护卫舰',class:'南极之风级',counts:'2',state:'服役中'},
            {id:'DDP-G',dai:'“守卫者”号',type:'导弹护卫舰',class:'守卫者级',counts:'2',state:'服役中'},
            {id:'CQ-S2',dai:'',type:'轻型坦克',class:'',counts:'200辆',state:'服役中'},
            {id:'RLT-2K',dai:'',type:'两栖坦克',class:'',counts:'280辆',state:'服役中'},
            {id:'CR-W',dai:'',type:'两栖输送装甲车（履带式）',class:'',counts:'100辆',state:'服役中'},
            {id:'CR-Z',dai:'',type:'两栖登陆战车（履带式）',class:'',counts:'152辆',state:'服役中'},
            {id:'CR-V“II型',dai:'',type:'轮式步兵装甲车',class:'',counts:'330辆',state:'服役中'},
            {id:'UH-60M',dai:'黑鹰',type:'通用直升机',class:'',counts:'与陆军共用',state:'服役中'},
            {id:'SH-60S',dai:'大洋鹰',type:'多用途反潜直升机',class:'',counts:'22架',state:'服役中'},
            {id:'AH-1N',dai:'眼镜蛇',type:'武装攻击直升机',class:'',counts:'30架',state:'服役中'},
            {id:'AH-1W',dai:'超级眼镜蛇',type:'武装攻击直升机',class:'',counts:'20架',state:'服役中'},
            {id:'欧洲“虎”式',dai:'',type:'武装直升机',class:'',counts:'28架',state:'服役中'},
            {id:'“白鸟”号',dai:'',type:'小型武装直升机',class:'',counts:'100架',state:'服役中'},
            {id:'F-35B',dai:'“闪电II”',type:'第五代隐身联合攻击战斗机',class:'',counts:'14架',state:'服役中'},
            {id:'C-130N',dai:'大力神”',type:'战术运输机',class:'',counts:'10架',state:'服役中'},

        ]
    },
    methods:{
        search(){
            var td;
            filter =this.inp1.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
             // 循环表格每一行，查找匹配项
            for (i = 0; i < tr.length; i++) {
                td1 = tr[i].getElementsByTagName("td")[0];
               td2= tr[i].getElementsByTagName("td")[1];
                if (td1) {
                  if (td1.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } 
                  else {
                    tr[i].style.display = "none";
                  }
                } 
              }
        },
        search2(){
            var td;
            filter =this.inp2.toUpperCase();
            table2 = document.getElementById("myTable2");
            tr = table2.getElementsByTagName("tr");
             // 循环表格每一行，查找匹配项
            for (j = 0; j < tr.length; j++) {
                td = tr[j].getElementsByTagName("td")[0];
                if (td) {
                  if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[j].style.display = "";
                  } else {
                    tr[j].style.display = "none";
                  }
                } 
                

              }

        },
        search3(){
          var td;
          filter =this.inp3.toUpperCase();
          table2 = document.getElementById("myTable3");
          tr = table2.getElementsByTagName("tr");
           // 循环表格每一行，查找匹配项
          for (j = 0; j < tr.length; j++) {
              td = tr[j].getElementsByTagName("td")[0];
              if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  tr[j].style.display = "";
                } else {
                  tr[j].style.display = "none";
                }
              } 
              

            }

      },
        search4(){
          var td;
          filter =this.inp4.toUpperCase();
          table2 = document.getElementById("myTable4");
          tr = table2.getElementsByTagName("tr");
          // 循环表格每一行，查找匹配项
          for (j = 0; j < tr.length; j++) {
              td = tr[j].getElementsByTagName("td")[0];
              if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  tr[j].style.display = "";
                } else {
                  tr[j].style.display = "none";
                }
              } 
              

            }

      }
    }
})



