
1. 配置项目repositories
``` groovy
 repositories {
    maven { url 'https://nexus.extscreen.com/repository/maven-public/' }
}
```

2. 引入到项目中
``` groovy
dependencies {
    implementation 'com.extscreen.runtime:official:版本号'
}
```
![](https://img.shields.io/badge/dynamic/xml?url=https://nexus.extscreen.com/repository/maven-releases/com/extscreen/runtime/official/maven-metadata.xml&query=metadata/versioning/latest&label=Latest)