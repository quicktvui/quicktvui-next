---
title: 文件模块
lang: zh-CN
---

# 文件模块

::: warning 注意：文件模块只能操作快应用自身的文件目录下的文件

* 快应用自身的文件目录对应的`android`系统路径为：`/data/data/APK包名/app_rpk/apps/快应用包名/files`
* 示例中初始化文件的方法：`newFile('/file_text.log')`对应`android`目录：`/data/data/APK包名/app_rpk/apps/快应用包名/files/file_text.log`文件。

:::


:::demo ## 基础用法

module/file/es-basic

:::

## API

### Exposes

| Name                | Description                 | Type                                           |
| ------------------- | --------------------------- | -----------------------------------------------|
| newFile             | 该方法创建文件                 | ^[Function]`newFile(pathname: string) => Promise<number>`|
| getFileId           | 该方法获取文件唯一标识符          | ^[Function]`getFileId() => number`|
| getName           | 该方法获取文件名          | ^[Function]`getName() => Promise<string>`|
| getParent           | 该方法获取文件父目录          | ^[Function]`getParent() => Promise<string>`|
| getPath           | 该方法获取文件目录          | ^[Function]`getPath() => Promise<string>`|
| isAbsolute           | 该方法获取抽象路径名是否是绝对路径 | ^[Function]`isAbsolute() => Promise<boolean>`|
| getCanonicalPath     | 该方法获取文件规范化的绝对路径 | ^[Function]`getCanonicalPath() => Promise<string>`|
| canRead     | 该方法获取文件是否可读 | ^[Function]`canRead() => Promise<boolean>`|
| canWrite     | 该方法获取文件是否可写 | ^[Function]`canWrite() => Promise<boolean>`|
| exists     | 该方法获取文件是否存在 | ^[Function]`exists() => Promise<boolean>`|
| isDirectory     | 该方法获取文件是否是目录 | ^[Function]`isDirectory() => Promise<boolean>`|
| isFile     | 该方法获取文件是否是文件 | ^[Function]`isFile() => Promise<boolean>`|
| isHidden     | 该方法获取文件是否是隐藏文件 | ^[Function]`isHidden() => Promise<boolean>`|
| lastModified     | 该方法获取文件最近修改日期 | ^[Function]`lastModified() => Promise<number>`|
| length     | 该方法获取文件长度 | ^[Function]`length() => Promise<number>`|
| createNewFile     | 该方法创建新文件 | ^[Function]`createNewFile() => Promise<boolean>`|
| deleteOnExit     | 该方法判断文件是否存在，如果存在则删除 | ^[Function]`deleteOnExit() => Promise<boolean>`|
| list     | 该方法获取子文件列表 | ^[Function]`list() => Promise<Array<string>>`|
| mkdir     | 该方法创建文件夹 | ^[Function]`mkdir() => Promise<boolean>`|
| mkdirs     | 该方法递归创建文件夹 | ^[Function]`mkdirs() => Promise<boolean>`|
| setLastModified     | 该方法设置文件最后更改时间 | ^[Function]`setLastModified(time: number) => Promise<boolean>`|
| getTotalSpace     | 该方法返回文件占用空间大小 | ^[Function]`getTotalSpace() => Promise<number>`|
| getFreeSpace     | 该方法返回目录可用空间大小 | ^[Function]`getFreeSpace() => Promise<number>`|
| getUsableSpace     | 该方法返回目录已使用空间大小 | ^[Function]`getUsableSpace() => Promise<number>`|
| delete     | 该方法删除文件 | ^[Function]`delete() => Promise<boolean>`|
| setReadOnly     | 该方法设置文件只读 | ^[Function]`setReadOnly() => Promise<boolean>`|
| setWritableOwnerOnly     | 该方法设置文件拥有者只能写 | ^[Function]`setWritableOwnerOnly(writable: boolean, ownerOnly: boolean) => Promise<boolean>`|
| setWritable     | 该方法设置文件是否可写 | ^[Function]`setWritable(writable: boolean) => Promise<boolean>`|
| setReadableOwnerOnly     | 该方法设置文件拥有者只读 | ^[Function]`setReadableOwnerOnly(readable: boolean, ownerOnly: boolean) => Promise<boolean>`|
| setReadable     | 该方法设置文件是否可读 | ^[Function]`setReadable(readable: boolean) => Promise<boolean>`|
| setExecutableOwnerOnly     | 该方法设置文件拥有者可执行 | ^[Function]`setExecutableOwnerOnly(executable: boolean, ownerOnly: boolean) => Promise<boolean>`|
| setExecutable     | 该方法设置文件是否可执行 | ^[Function]`setExecutable(executable: boolean) => Promise<boolean>`|
| canExecute     | 该方法返回文件是否可执行 | ^[Function]`canExecute() => Promise<boolean>`|
| renameTo     | 该方法重命名文件 | ^[Function]`renameTo(renameFileId: number) => Promise<boolean>`|
| close     | 该方法关闭文件 | ^[Function]`close() => Promise<boolean>`|
