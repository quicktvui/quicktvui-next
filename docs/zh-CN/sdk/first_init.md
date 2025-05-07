初始化


``` java
public class App extends MultiDexApplication {
    @Override
    public void onCreate(){
        EsKitInitHelper.init(this, InitConfig.getDefault().setAppId("申请的APPID")
            .setChannel("渠道").addFlags(InitConfig.FLAG_DYNAMIC_SO) // 动态SO
        ); 
    }
}
```