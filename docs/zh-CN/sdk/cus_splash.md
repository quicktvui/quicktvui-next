## 如何自定义？
快应用sdk支持自定义启动页面，需要一下几个改动。

* 1.自定义view 实现IEsCoverView接口
* 2.创建xml 使用你自定义的view
* 3.在启动快应用的时候通过EsData().setCoverLayoutId(resId) 设置进去

``` java

//自定义启动图View 需要实现 IEsCoverView 接口
public class MyCustomCoverView extends ImageView implements IEsCoverView {

    private Context mContext;

    public MyCustomCoverView(Context context) {
        super(context);
        mContext = context;
    }

    public MyCustomCoverView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        mContext = context;
    }

    public MyCustomCoverView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        mContext = context;
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    public MyCustomCoverView(Context context, @Nullable AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        mContext = context;
    }

    @Override
    public void onInit(Serializable serializable) {//init时候可以装入自己的图片 没有直接在xml中设置即可 例如下面xml中的  android:src="@drawable/splash_bg_default"
        if (mContext != null) {
            Glide.with(mContext)
                    .asGif()
                    .load(R.drawable.test)//可以加载自己的图片
                    .into(this);
        }
    }

    @Override
    public void onEsRenderSuccess() {//渲染快应用成功后可以使用清理图片或者进一步加载后续图片等操作
        this.postDelayed(() -> {
            try {
                ((ViewGroup) getParent()).removeView(this);
                if (mContext != null) {
                    Glide.with(mContext).clear(this);
                }
                setBackgroundResource(R.drawable.custon_cover_view_bg);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }, 1800);
    }

    @Override
    public void onEsRenderFailed(EsException e) {

    }

    @Override
    public void suspend(String s) {

    }

    @Override
    public void unSuspend() {

    }
}

//xml
<?xml version="1.0"  encoding="utf-8"?>
<com.xxx.xxx.coustom.MyCustomCoverView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:src="@drawable/splash_bg_default"
    android:scaleType="fitXY"
    android:background="@drawable/custon_cover_view_bg"
     />

 //在需要调用启动快应用的位置
public void start(){
    EsData data = new EsData();
    data.setAppPackage("es.xxx.xxx.xxx");//小程序包名
    data.setCoverLayoutId(R.layout.my_custom_cover);//自定义的xml
    //启动快应用
    EsManager.get().start(data);
}

```
