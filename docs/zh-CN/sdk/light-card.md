---
title: 轻卡
lang: zh-CN
---

放下载apk和项目源码

# 轻卡

快应用轻卡是专为原生应用与快应用混合开发的解决方案。轻卡由JSView实现，可以将其嵌入到任意大小、任意位置的安卓ViewGroup当中。在为原生应用添加动态化能力的同时，实现了与原生应用的一致体验。

<video width="80%" src="/sdk/light-card.mp4" controls autoplay muted loop />

如上所示，整个界面是安卓原生开发，`Js轻卡` 、 `JsFragment`以及`轻卡弹窗`里的界面是vue开发。

<br>
<br>

## 混合开发
<video width="80%" src="/sdk/combined.mp4" controls muted />


## 示例代码

### 1. 简单使用
``` java
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // 第一步. 设置加载参数
        EsData data = new EsData();
        data.setAppPackage("轻卡应用的包名");

        // 第二步. 加载轻卡应用
        JsSlotViewManager.get().attachToActivity(this, data);

        // 第三步. 创建轻卡
        JsSlotView jsView = JsSlotViewManager.get().createJSView(this, "weather");

        findViewById<ViewGroup>(R.id.jsview_container).addView(jsView);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        // 卸载轻卡应用
        JsSlotViewManager.get().detachFromActivity(this);
    }
}

```

### 2. 在RecyclerView中使用

``` java
RecyclerView rv = new RecyclerView(this);
rv.setLayoutManager(new LinearLayoutManager(this));
rv.setAdapter(new JsViewAdapter(this));
setContentView(rv);

private static final class JsViewAdapter extends RecyclerView.Adapter<JsViewAdapter.ViewHolder> {
    private final String[] mViewIds = new String[] {"weather", "clock", "qlist"};
    private final Context mContext;
    public JsViewAdapter(Context context) {
        this.mContext = context;
    }
    @Override
    public int getItemCount() {
        return mViewIds.length;
    }
    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new ViewHolder(new FrameLayout(mContext));
    }
    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        if (holder.jsView == null) {
            JsSlotView jsView = JsSlotViewManager.get().createJSView(mContext, mViewIds[position]);
            ((ViewGroup)holder.itemView).addView(jsView);
            holder.jsView = jsView;
        }
        holder.jsView.getRecyclerViewEventHandler()
                .onBindViewHolder(position, "传递数据到Vue");
    }
    @Override
    public void onViewAttachedToWindow(@NonNull ViewHolder holder) {
        super.onViewAttachedToWindow(holder);
        holder.jsView.getRecyclerViewEventHandler()
                .onViewAttachedToWindow(holder.getAdapterPosition());
    }
    @Override
    public void onViewDetachedFromWindow(@NonNull ViewHolder holder) {
        super.onViewDetachedFromWindow(holder);
        holder.jsView.getRecyclerViewEventHandler()
                .onViewDetachedFromWindow(holder.getAdapterPosition());
    }
    @Override
    public void onViewRecycled(@NonNull ViewHolder holder) {
        super.onViewRecycled(holder);
        holder.jsView.getRecyclerViewEventHandler()
                .onViewRecycled(holder.getAdapterPosition());
    }

    private static final class ViewHolder extends RecyclerView.ViewHolder {
        public JsSlotView jsView;
        public ViewHolder(View itemView) {
            super(itemView);
        }
    }
}
```
