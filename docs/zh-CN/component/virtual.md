# Virtual DOM 组件

传统组件中，`DOM`根据业务在JS层进行操作，并将`DOM`的变动同步`Native`。
由于这些操作消耗大量的计算资源，当页面中`DOM`数量过多或者`DOM`操作过于频繁时，整体性能会大幅降低，影响体验。
特别在性能普通较低的`电视设备`上，尤为明显。
为了解决此问题，我们将`列表`等`DOM`数量较多的组件操作下沉到`Native`层，由Native层直接操作`DOM`，从而提高性能，这些组件统称为`Virtual DOM组件`。

<img src="/component/virtual-dom.png" />
