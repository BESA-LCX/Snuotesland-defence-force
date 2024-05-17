let app = new Vue({
  el: "#app",
  data() {
    return {
      activeIndex: 1,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      bars: [
        { index: 1, name: "南岛陆军" },
        { index: 2, name: "南岛皇家空军" },
        { index: 3, name: "南岛皇家海军" },
        { index: 4, name: "南岛海军陆战队" },
        { index: 5, name: "南岛空中国民警卫队" },
        { index: 6, name: "南岛海岸警卫队" },
      ],
      //南岛陆军装备
      evnArmy: {
        //坦克
        tank: [
          { id: "M1A2", name: "艾布拉姆斯", type: "主战坦克", count: 60, img_src: "picture_army/M1A2.jpg" },
          { id: "Leopard 2A6", name: "豹2A6", type: "主战坦克", count: 40, img_src: "picture_army/%E8%B1%B92A6.jpg" },
          { id: "Challenger II", name: "挑战者II", type: "主战坦克", count: 50, img_src: "picture_army/%E6%8C%91%E6%88%98%E8%80%852.jpg" },
          { id: "Type 10 MBT", name: "10式", type: "主战坦克", count: 30, img_src: "picture_army/10%E5%BC%8F.jpg" },
          { id: "Merkava Mk3", name: "梅卡瓦Mk3", type: "主战坦克", count: 52, img_src: "picture_army/%E6%A2%85%E5%8D%A1%E7%93%A6.jpg" },
          { id: "Leclerc", name: "勒克莱尔", type: "主战坦克", count: 20, img_src: "picture_army/%E5%8B%92%E5%85%8B%E8%8E%B1%E5%B0%94.jpg" },
          { id: "M1A1", name: "艾布拉姆斯", type: "主战坦克", count: 100, img_src: "picture_army/M1.jpg" },
          { id: "CQ-S1", name: "", type: "轻型坦克", count: 120, img_src: "picture_army/CQ-S1.jpg" }
        ],
        //装甲战车
        armored_vehicle: [
          { id: "RZ-G1", name: "尤斯塔斯", type: "无人多功能战车", count: 210, img_src: "picture_army/%E5%B0%A4%E6%96%AF%E5%A1%94%E6%96%AF.png" },
          { id: "ZHLA-MX", name: "米霍克", type: "轮式装甲车", count: 300, img_src: "picture_army/%E7%B1%B3%E9%9C%8D%E5%85%8B%E8%A3%85%E7%94%B2%E8%BD%A6.jpg" },
          { id: "CR-V II", name: "", type: "轮式步兵装甲车", count: 220, img_src: "picture_army/CR-V%E2%80%9CII%E2%80%9D%E5%9E%8B.jpg" },
          { id: "CR-U 0", name: "", type: "轮式步兵战车", count: 210, img_src: "picture_army/CR-U%E2%80%9C0%E2%80%9D.jpg" },
        ],
        //自行火炮
        self_propelled_artillery: [
          { id: "Roaring Lion-S", name: "怒吼狮-S", type: "自行远程火箭炮", count: 132, img_src: "picture_army/%E6%80%92%E5%90%BC%E7%8B%AE.jpg" },
          { id: "Type 99", name: "99式", type: "自行榴弹炮", count: 49, img_src: "picture_army/99%E5%BC%8F%E8%87%AA%E8%A1%8C%E6%A6%B4%E5%BC%B9%E7%82%AE.jpg" },
          { id: "O1B3/O1C3", name: "O1B3式/O1C3式", type: "自行高射炮", count: 130, img_src: "picture_army/O1B3%E5%BC%8F.jpg" },
        ],
        //直升机
        helicopter: [
          { id: "AH-64D", name: "长弓阿帕奇", type: "武装直升机", count: 64, img_src: "picture_army/AH-64D.jpg" },
          { id: "AH-1N", name: "眼镜蛇", type: "武装直升机", count: 50, img_src: "picture_army/AH-1N.jpg" },
          { id: "UH-60M", name: "黑鹰", type: "通用直升机", count: 120, img_src: "picture_army/UH-60.jpg" },
          { id: "CH-47N", name: "支奴干", type: "全天候多功能中/重型运输直升机", count: 54, img_src: "picture_army/CH-47.jpg" },
          { id: "MV-22", name: "鱼鹰", type: "垂直起降倾转旋翼机", count: 6, img_src: "picture_army/MV-22.jpg" },
        ],
        //防空反导系统
        air_defense_system: [
          { id: "HHLZ-X", name: "光影", type: "陆基量子反导系统", count: 15, img_src: "https://imgs.aixifan.com/o_1d6i6vnre18m81hkl1njmbcsnnr.png" },
          { id: "XHG-3V", name: "群星", type: "陆基离子防空炮", count: 23, img_src: "https://n.sinaimg.cn/sinakd20123/568/w768h600/20230420/86c2-f528d2fafcaf73c38c9a55e883b626e2.jpg" },
          { id: "XHG2", name: "", type: "陆基电磁防空炮", count: 26, img_src: "picture_army/%E9%99%86%E5%9F%BA%E7%94%B5%E7%A3%81%E9%98%B2%E7%A9%BA%E7%82%AE.jpg" },
          { id: "XHG1", name: "", type: "陆基激光防空炮", count: 20, img_src: "picture_army/%E9%99%86%E5%9F%BA%E6%BF%80%E5%85%89%E9%98%B2%E7%A9%BA%E7%82%AE.jpg" },
          { id: "PAC-3", name: "爱国者III", type: "反导系统", count: 9, img_src: "picture_army/PAC-3.jpg" },
          { id: "PAC-2", name: "爱国者II", type: "防空系统", count: 4, img_src: "picture_army/PAC-2.jpg" },
        ]
      },
      //南岛皇家空军装备
      evnAirForce: {
        //战斗机
        fighter: [
          { id: "ELOZ-5000", name: "超级光束狮", type: "第五代超音速多用途隐身战机", count: 60, img_src: "https://n.sinaimg.cn/spider20190427/763/w1000h563/20190427/prwA-hvvuiyp2024409.jpg" },
          { id: "F-35A", name: "闪电II", type: "第五代隐身联合攻击战斗机", count: 40, img_src: "picture_air/F-35A.jpg" },
          { id: "F-15SN", name: "皇牌鹰", type: "超音速多用途战斗轰炸机", count: 22, img_src: "picture_air/F-15SN.jpg" },
          { id: "F-15SG", name: "先进鹰", type: "超音速多用途战斗轰炸机", count: 8, img_src: "picture_air/F-15SG.jpg" },
          { id: "Rafale M", name: "阵风 M", type: "全能通用型战机", count: 20, img_src: "picture_air/Rafale.jpg" },
          { id: "Typhoon", name: "台风", type: "高机动性多用途战机", count: 46, img_src: "picture_air/Typhoon.jpg" },
          { id: "F-15I", name: "雷暴", type: "超音速多用途战斗轰炸机", count: 12, img_src: "picture_air/F-15I.jpg" },
          { id: "F-15E", name: "打击鹰", type: "超音速多用途战斗轰炸机", count: 60, img_src: "picture_air/F-15E.jpg" },
          { id: "F-16V/IN", name: "毒蛇", type: "轻型多用途空中优势战机", count: 34, img_src: "picture_air/F-16V.jpg" },
          { id: "F-2B", name: "平成零战", type: "轻型多用途空中优势战机", count: 20, img_src: "picture_air/F-2B.jpg" },
          { id: "JAS-39C", name: "鹰狮", type: "超音速全天候多用途战机", count: 70, img_src: "picture_air/JAS-39C.jpg" },
          { id: "F-16XL", name: "独立隼", type: "轻型多用途空中优势战机", count: 20, img_src: "picture_air/F-16XL.jpg" },
          { id: "AFTI-16", name: "蝰蛇", type: "轻型多用途空中优势战机", count: 32, img_src: "picture_air/AFTI-16.jpg" },
          { id: "F/A-18C/D", name: "大黄蜂", type: "超音速多用途战斗攻击机", count: 126, img_src: "picture_air/FA-18CD.jpg" },
          { id: "F-16C/D", name: "战隼", type: "轻型多用途空中优势战机", count: 150, img_src: "picture_air/F-16CD.jpg" },
          { id: "F-15C/D", name: "鹰", type: "超音速全天候空中优势战机", count: 120, img_src: "picture_air/F-15JDJ.jpg" },
        ],
        //电子战机
        Electronic_warfare_aircraft: [
          { id: "EA-18G", name: "咆哮者", type: "电子战机", count: 20, img_src: "picture_air/EA-18G.jpg" },
          { id: "LC-001", name: "闪电之狮", type: "电子战机", count: 60, img_src: "picture_air/LC-001.jpg" },
          { id: "DA-6E", name: "萤火虫", type: "电子侦察机", count: 39, img_src: "picture_air/DA-6E.jpg" },
        ],
        //攻击机
        Attackers: [
          { id: "LC-002", name: "沙漠之狮", type: "攻击机", count: 120, img_src: "picture_air/LC-002.jpg" },
        ],
        //预警机
        AWACS: [
          { id: "E-7A", name: "楔尾", type: "预警机", count: 2, img_src: "https://imgproc.airliners.net/photos/airliners/1/5/9/4935951.jpg?v=v4658ee64865" },
          { id: "E-3C", name: "望楼", type: "预警机", count: 27, img_src: "picture_air/E-3.jpg" },
          { id: "E-2C", name: "鹰眼", type: "预警机", count: 44, img_src: "picture_air/E-2C.jpg" },
        ],
        //加油机
        Fuel_dispenser: [
          { id: "KC-10A", name: "补充者", type: "大型空中加油机", count: 3, img_src: "picture_air/KC-10A.jpg" },
          { id: "KC-767J", name: "飞马", type: "大型空中加油机", count: 44, img_src: "picture_air/KC-767.jpg" },
          { id: "KC-135N", name: "", type: "大型空中加油机", count: 72, img_src: "picture_air/KC-135.jpg" },
        ],
        //运输机
        transport: [
          { id: "MV-200G", name: "", type: "战略/战术运输机", count: 92, img_src: "picture_air/MV-200G.jpg" },
        ],
        //无人机
        drone: [
          { id: "FLQ-4/4K", name: "神秘鹤/敏捷鹤", type: "无人攻击机", count: 407, img_src: "picture_air/FLQ-44K.jpg" },
        ]
      },
      //南岛皇家海军装备
      evnNavy:{
        //航空母舰
        aircraft_carrier:[
          {id:"SVN-21",className:"空岛级",type:"空天母舰",count:1,img_src:"picture_navy/%E7%A9%BA%E5%B2%9B%E5%8F%B7.jpg"},
        ],
        //导弹驱逐舰
        destroyer:[
          {id:"SHN-026~029",className:"狮子座级",type:"宙斯盾导弹驱逐舰",count:4,img_src:"picture_navy/%E7%8B%AE%E5%AD%90%E5%BA%A7%E7%BA%A7.jpg"},
          {id:"SHN-020~024",className:"尼兰斯级",type:"导弹驱逐舰",count:6,img_src:"picture_navy/%E5%B0%BC%E5%85%B0%E6%96%AF%E7%BA%A7.jpg"},      
        ],
        //导弹护卫舰
        frigate:[
          {id:"DHN-031~034",className:"彩虹罩级",type:"宙斯盾导弹护卫舰",count:6,img_src:"picture_navy/%E5%BD%A9%E8%99%B9%E7%BD%A9.jpg"},   
          {id:"DHN-028~030",className:"南极之风级",type:"导弹护卫舰",count:3,img_src:"picture_navy/%E5%8D%97%E6%9E%81%E4%B9%8B%E9%A3%8E.jpg"}, 
          {id:"DHN-025~027",className:"守卫者级",type:"导弹护卫舰",count:4,img_src:"picture_navy/%E5%AE%88%E5%8D%AB%E8%80%85%E7%BA%A7.jpg"},
          {id:"DHN-023~026",className:"奥尔林达洲级",type:"导弹护卫舰",count:4,img_src:"picture_navy/%E5%A5%A5%E5%B0%94%E6%9E%97%E8%BE%BE%E6%B4%B2%E7%BA%A7.jpg"},                                  
        ],
        //导弹巡洋舰
        cruiser:[
          {id:"SHN-010~015",className:"风级",type:"导弹巡洋舰",count:6,img_src:"picture_navy/%E5%AF%BC%E5%BC%B9%E5%B7%A1%E6%B4%8B%E8%88%B0.jpg"},
        ],
        //潜艇
        submarine:[
          {id:"PHN-013~016",className:"红海星级",type:"攻击核潜艇",count:4,img_src:"picture_navy/%E7%BA%A2%E6%B5%B7%E6%98%9F%E7%BA%A7.jpg"},
          {id:"PHN-010~013",className:"海鲸级",type:"攻击核潜艇",count:4,img_src:"picture_navy/%E6%B5%B7%E9%B2%B8%E7%BA%A7.jpg"},
          {id:"PHN-008~009",className:"苍龙级",type:"常规动力潜艇",count:2,img_src:"picture_navy/%E8%8B%8D%E9%BE%99%E7%BA%A7.jpg"},
          {id:"PHN-006~007",className:"212A型",type:"常规动力潜艇",count:2,img_src:"picture_navy/212A%E5%9E%8B.jpg"},
          {id:"PHN-005",className:"潜伏者",type:"常规动力潜艇",count:1,img_src:"picture_navy/%E6%BD%9C%E4%BC%8F%E8%80%85.jpg"},
          {id:"PHN-001~004",className:"鱼叉级",type:"常规动力潜艇",count:4,img_src:"picture_navy/%E9%B1%BC%E5%8F%89%E6%BD%9C%E8%89%87.jpg"},
        ],
        //两栖登陆输送舰
        Amphibious_landing_transport_ship:[
          {id:"MHN-001~003",className:"巨蟹座级",type:"两栖输送登陆舰",count:3,img_src:"picture_navy/%E5%B7%A8%E8%9F%B9%E5%BA%A7%E7%BA%A7.jpg"},
        ],
        //扫雷舰
        minesweeper:[
          {id:"NHN-001~010",className:"捕食者级",type:"扫雷舰",count:10,img_src:"picture_navy/%E6%8D%95%E9%A3%9F%E8%80%85%E7%BA%A7.jpg"},
        ],
        //辅助舰船
        Auxiliary_ships:[
          {type:"训练舰",count:7,img_src:"picture_navy/%E8%AE%AD%E7%BB%83%E8%88%B0.jpg"},
          {type:"巡逻艇",count:26,img_src:"picture_navy/%E5%B7%A1%E9%80%BB%E8%89%87.jpg"},
          {type:"补给舰",count:8,img_src:"picture_navy/%E8%A1%A5%E7%BB%99%E8%88%B0.jpg"},
        ],
        //海军航空兵
        Naval_aviation:[
          { id: "F-35C", name: "闪电II", type: "第五代隐身联合攻击战斗机", count: 16, img_src: "picture_navy/F-35C.jpg" },
          { id: "F/A-18E/F", name: "超级大黄蜂", type: "超音速多用途战斗轰炸机", count: 54, img_src: "picture_navy/FA-18E%20F.jpg" },
          { id: "LC-005", name: "台风之狮", type: "超音速战斗攻击机", count: 86, img_src: "picture_navy/LC-005.jpg" },
          { id: "F-15K", name: "冲击鹰", type: "超音速多用途战斗轰炸机", count: 20, img_src: "picture_navy/F-15K.jpg" },
          { id: "F-2A", name: "平成零战", type: "轻型多用途空中优势战机", count: 40, img_src: "picture_navy/F-2A.jpg" },
          { id: "LC-003", name: "速豚之狮", type: "海间攻击机", count: 32, img_src: "picture_navy/LC-003.jpg" },
          { id: "LC-001", name: "闪电之狮", type: "电子战机", count: 30, img_src: "picture_navy/LC-001.jpg" },
          { id: "E-2D", name: "超级鹰眼", type: "预警机", count: 3, img_src: "picture_navy/E-2D.jpg" },
          { id: "E-2C", name: "鹰眼", type: "预警机", count: 12, img_src: "picture_navy/E-2C.jpg" },
          { id: "SH-60K", name: "海鹰", type: "反潜直升机", count: 66, img_src: "picture_navy/SH-60K.jpg" },
          { id: "P-1", name: "", type: "反潜巡逻机", count: 10, img_src: "picture_navy/E-2D.jpg" },
          { id: "P-3C", name: "猎户座", type: "反潜巡逻机", count: 30, img_src: "picture_navy/P-3C.jpg" },
        ]
      }
    }
  },
  methods: {
    turnBar(index) {
      this.activeIndex = index;
      switch (index) {
        case 1:
          this.show1 = true;
          this.show2 = false;
          this.show3 = false;
          this.show4 = false;
          this.show5 = false;
          this.show6 = false;
          break;
        case 2:
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
          this.show4 = false;
          this.show5 = false;
          this.show6 = false;
          break;
        case 3:
          this.show1 = false;
          this.show2 = false;
          this.show3 = true;
          this.show4 = false;
          this.show5 = false;
          this.show6 = false;
          break;
        case 4:
          this.show1 = false;
          this.show2 = false;
          this.show3 = false;
          this.show4 = true;
          this.show5 = false;
          this.show6 = false;
          break;
        case 5:
          this.show1 = false;
          this.show2 = false;
          this.show3 = false;
          this.show4 = false;
          this.show5 = true;
          this.show6 = false;
          break;
        case 6:
          this.show1 = false;
          this.show2 = false;
          this.show3 = false;
          this.show4 = false;
          this.show5 = false;
          this.show6 = true;
          break;

        default:
          break;
      }
    }
  },
  created() {

  },
  mounted(){
    
  }
})