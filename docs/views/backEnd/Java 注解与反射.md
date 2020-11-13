---
title: Java 注解与反射
date: 2020-10-28
tags:
 - backEnd
 - Java          
categories: 
 - backEnd
---

# Java 注解与反射

# 注解(Annotation)

## 什么是注解

1. Annotation是从JDk5.0开始引入的新技术
2. Annotation的作用：
   - 不是程序本身，可以对程序做出解释（这一点和注释没什么区别）
   - 可以被其他程序（如编译器）读取
3. Annotation的格式
   - 以“@注释名”在代码中存在，还可以添加一些参数值
4. Annotation在哪里使用？
   - 可以附加在package，class，method，field等上面，相当于给他们添加了额外的辅助信息，我们可以通过反射机制编程实现对这些原数据的访问

## 内置注解

- @Override 重写注解
- @Deprecated 不推荐程序员使用，但是可以使用，或存在更好的方式
- @SuppressWarnings("all") 镇压警告，给强迫症，不建议使用

## 元注解

- 元注解的作用是负责注解其他注解，Java定义了4个标准的meta-annotation类型，它们被用来提供对其他annotation类型做说明

- 这些类型和它们所支持的类在java.lang.annotation包中可以找到

  - ==@Target==：用于描述注解的使用范围

  - ==@Retention==：表示需要在什么级别保存该注释信息，用于描述注解的生命周期

    （SOURCE < CLASS < RUNTIME）

  - @Document：说明该注解将被包含在javadoc中

  - @Inherited：说明子类可以继承父类中的该注解

```java
//定义一个注解

public class Test{
    //注解可以显式赋值
    @MyAnnotation(name = "yjc",schools = {"西北大学"，"西工大"})
    public void test(){}
}


@Target(value = {ElementType.METHOD,ElementType.TYPE) // 目标作用域只能在方法上和类上
@Retention(value = RUNTIME) //表示注解在什么地方还有效
@Document //表示是否将我们的注解生成在javadoc中
@Inherited // 子类可以继承父类的注解
@interface MyAnnotation{
    //注解的参数: 参数类型 + 参数名();
    String name();
    //或者String name() default ""; //默认赋值
    int age() default 0;
    int id() default -1; //如果默认值为-1，代表不存在
    
    String[] schools();
    //或者 String[] schools() default {"西部开源"，"清华大学"} ;
}
```

```java
public class Test{
    //注解可以显式赋值
    @MyAnnotation2("YJC")  //注解只有一个值，使用value命名可以省略
    public void test(){}
}

@Target(value = {ElementType.METHOD,ElementType.TYPE) 
@Retention(value = RUNTIME)        
@interface MyAnnotation2{
    String value();
}
```



## 反射(Reflection)

### 一、反射机制概述

#### Java反射机制提供的功能

1. 在运行时判断任意一个对象所属的类
2. 在运行时构造任意一个类的对象
3. 在运行时判断任意一个类所具有的成员变量和方法
4. 在运行时获取泛型信息
5. 在运行时调用任意一个对象的成员变量和方法
6. 在运行时处理注解
7. 生成动态代理
8. ……

#### java反射的优点和缺点

​	优点：可以实现动态创建对象和编译，体现出很大的灵活性

​	缺点：对性能有影响。使用反射基本上是一种解释操作，我们可以告诉JVM，我们希望做什么并且它满足我们的要求。这类操作总是慢于直接执行相同的操作。

```java
// 什么叫反射
public class Test{
    public static void main(String[] args){
        //通过反射获取类的Class对象
        Class c1 = Class.forName("com.yjc.reflection.User");
        System.out.println(c1);
        
        //一个类在内存中只有一个Class对象
        //一个类被加载后，类的整个结构都会被封装在Class对象中
        
    }
}

//实体类：pojo、entity
class User{
    private String name;
    Private int id;
    private int age;
    
    /*
    构造器
    get、set
    */
}
```



### 二、理解Class类并获取CLass实例

#### 获取Class类的实例

1. 已知具体的类，通过类的class属性获取，该方法最为安全可靠，程序性能最高

```java
Class clazz = Person.class;
```

2. 已知某个类的实例，调用该实例的getClass()方法获取Class对象

```java
Class clazz = person.getClass();
```

3. 已知一个类的全类名，且该类在类路径下，可通过Class类的静态方法forName()获取，可抛出ClassNotFoundException

```java
Class clazz = Class.forName("demo01.Student");
```

4. 内置基本数据类型可直接用 类名.TYPE

```java
Class clazz = Integer.TYPE;
```

5. 还可以利用ClassLoader，下节

#### 哪些类型可以有Class对象？

- class：外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类

  ```java
  Class clazz = object.class;
  ```

- interface：接口

  ```java
  Class clazz = Comparable.class;
  ```

- []：数组

  ```java
  Class clazz = String[].class;
  Class clazz = int[][].class //二维
  ```

- enum：枚举

  ```java
  Class clazz = ElementType.class;
  ```

- annotation：注解@interface

  ```java
  Class clazz = Override.class;
  ```

- primitive type：基本数据类型

  ```java
  Class clazz = Integer.class;
  ```

- void

  ```java
  Class clazz = void.class;
  ```

### 三、类的加载与ClassLoader

#### 1、了解：类加载的过程：

![image-20201027202917540](E:\Typora_Imagine\image-20201027202917540.png)

- **加载：**将class文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时的数据结构，然后生成一个代表这个类的Java.lang.Class对象。

- **连接：**将Java类的二进制代码合并到据JVM的运行状态之中的过程。

  - **验证：**确保类加载的类信息符合JVM规范，没有安全方面的问题
  - **准备：**正式为类变量（static）分配内存并设置类变量默认初始值的阶段，这些内存都将在方法区中进行分配
  - **解析：**虚拟机常量池内的符号引用（常量名）替换为直接引用（地址）的过程

- **初始化：**

  - 执行类构造器<clinit>()方法的过程。类构造器<clinit>()方法是由编译器自动收集类中所有类变量的赋值动作和静态代码块中的语句合并产生的。（类构造器是构造类信息的，不是构造该类对象的构造器）。

    > <clinit>() 方法是由编译器按语句在源文件中出现的顺序，依次自动收集类中的所有类变量的赋值动作和静态代码块中的语句合并产生的。（不包括构造器中的语句。构造器是初始化对象的，类加载完成后，创建对象时候将调用的 <init>() 方法来初始化对象）
    >
    > 
    >
    > <clinit>() 方法对于类或接口来说并不是必需的，如果一个类中没有静态语句块，也没有对变量的赋值操作，那么编译器可以不为这个类生成 <clinit>()方法。

    **静态语句块中只能访问到定义在静态语句块之前的变量，定义在它之后的变量，在前面的静态语句块可以赋值，但是不能访问，如下程序：**

    ```java
    public class Test {
        static {
            // 给变量赋值可以正常编译通过
            i = 0;
            // 这句编译器会提示"非法向前引用"
            System.out.println(i);
        }
        static int i = 1;
    }
    ```

    

  - 当初始化一个类的时候，如果发现其父类还没有进行初始化，则需要先出发其父类的初始化。

  - 虚拟机会保证一个类的<clinit>()方法在多线程环境中被正确的加锁和同步。

#### 2、类加载的时机

**类的主动引用（一定会发生类的初始化）：**

​    对于初始化阶段，虚拟机规范规定了有且只有 5 种情况必须立即对类进行“初始化”（而加载、验证、准备自然需要在此之前开始）：

1. 遇到new、getstatic 和 putstatic 或 invokestatic 这4条字节码指令时，如果类没有进行过初始化，则需要先触发其初始化。对应场景是：使用 new 实例化对象、读取或设置一个类的静态字段（被 final 修饰、已在编译期把结果放入常量池的静态字段除外）、以及调用一个类的静态方法。
2. 对类进行反射调用的时候，如果类没有进行过初始化，则需要先触发其初始化。
3. 当初始化类的父类还没有进行过初始化，则需要先触发其父类的初始化。（而一个接口在初始化时，并不要求其父接口全部都完成了初始化）
4. 虚拟机启动时，用户需要指定一个要执行的主类（包含 main() 方法的那个类），
   虚拟机会先初始化这个主类。

> *当使用 JDK 1.7 的动态语言支持时，如果一个 java.lang.invoke.MethodHandle 实例最后的解析结果 REF_getStatic、REF_putStatic、REF_invokeStatic 的方法句柄，并且这个方法句柄所对应的类没有进行过初始化，则需要先触发其初始化。*

**类的被动引用（不会发生类的初始化）：**

1. 当访问一个静态域时，只有真正声明这个域的类才会被初始化。如：当通过子类引用父类的静态变量，不会导致子类初始化。
2. 通过数组定义来引用类，不会触发此类的初始化。`MyClass[] cs = new MyClass[10];`
3. 引用常量不会触发此类的初始化（常量在连接阶段就存入调用类的常量池中了）

#### 3、类加载器ClassLoader

**类加载器的作用时把类（class）装载进内存的。JVM规范定义了如下类型的类加载器：**

- **引导类加载器：**C++编写的，是JVM自带的类加载器，负责Java平台核心库，用来装载核心类库。==该加载器无法直接获取。==
- **扩展类加载器：**负责jre/lib/ext目录下的jar包或-D java.ext.dirs指定目录下的jar包装入工作库。
- **系统类加载器：**负责java -classpath或-D Java.class.path所指的目录下的类与jar包装入工作，是最常用的加载器。

![图摘自《码出高效》](E:\Typora_Imagine\14923529-7ca333cbae4c1edd.png)

### 四、创建运行时类的对象

```java
// 获得Class对象
        Class c = Class.forName("com.yanjc.tests.User");

        // 构造一个对象
        User user = (User)c.getDeclaredConstructor().newInstance();
        System.out.println(user); // 调用了无参构造器

        //通过构造器创建对象
        Constructor constructor = c.getDeclaredConstructor(String.class, int.class); //调用了有参构造器
        User user2 = (User)constructor.newInstance("夏明", 001);
        System.out.println(user2);
```





### 五、获取运行时类的结构



```java
public class test01 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException {
        Class c = Class.forName("com.yanjc.tests.User");

       /* User user = new User();
        c = user.getClass();*/

        //获得类的名字
        System.out.println(c.getName()); // 获得包名 + 类名
        System.out.println(c.getSimpleName()); // 只获得类名

        //获得类的属性
        System.out.println("=======================");
        Field[] fields = c.getFields(); // 只能找到public属性
       /* for(Field field : fields)
            System.out.println(field);*/

        fields = c.getDeclaredFields(); // 找到全部属性
        for(Field field : fields)
            System.out.println(field);

        //获得类的方法
        System.out.println("=======================");
        Method[] methods = c.getMethods(); // 获得本类及其父类的全部public方法
        for(Method method : methods)
            System.out.println("getMethods" + method);
        methods = c.getDeclaredMethods(); // 获得本类的所有方法
        for(Method method : methods)
            System.out.println("getDeclaredMethods" + method);

        //获得指定方法
        //因为有重载存在，所以需要参数类型
        Method getName = c.getMethod("getName", null);
        Method setName = c.getMethod("setName", String.class);
        System.out.println(getName);
        System.out.println(setName);

        //获得类的构造器
        System.out.println("=======================");
        Constructor[] constructors = c.getConstructors(); // 获得本来public构造器
        for (Constructor constructor : constructors) {
            System.out.println(constructor);
        }
        constructors = c.getDeclaredConstructors(); // 获得全部构造器
        for (Constructor constructor : constructors) {
            System.out.println("#" + constructor);
        }

        //获得指定构造器
        Constructor declaredConstructor = c.getDeclaredConstructor(String.class, int.class);

        System.out.println("指定：" + declaredConstructor);
    }
}
```

### 六、调用运行时类的指定结构

```java
public class test02 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {
        // 获得Class对象
        Class c = Class.forName("com.yanjc.tests.User");

        // 构造一个对象
        User user = (User)c.getDeclaredConstructor().newInstance();
        System.out.println(user); // 调用了无参构造器

        //通过构造器创建对象
        Constructor constructor = c.getDeclaredConstructor(String.class, int.class); //调用了有参构造器
        User user2 = (User)constructor.newInstance("夏明", 001);
        System.out.println(user2);

        //通过反射调用普通方法
        User user3 = (User)c.newInstance();
        //通过反射获取一个方法
        Method setName = c.getDeclaredMethod("setName", String.class);

        //invoke : 激活的意思
        //(对象,"方法的值")  已经有了方法和其要的参数类型
        //第一个参数让其知道是哪个对象的方法，第二个参数是方法具体的参数
        setName.invoke(user3,"小红");
        System.out.println(user3.getName());

        //通过反射操作属性
        User user4 = (User)c.newInstance();
        Field name = c.getDeclaredField("name");

        //不能直接操作私有属性，我们需要关闭程序的安全检测，属性或方法的setAccessible(true);
        name.setAccessible(true);
        name.set(user4,"小红2");
        System.out.println(user4.getName());
    }
}
```



### 七、性能对比分析

```java
public class test03 {

    //普通方式调用
    public static void test01(){
        User user = new User();

        long startTime = System.currentTimeMillis();
        
        for (int i = 0; i < 1000000000; i++)
            user.getName();

        long endTime = System.currentTimeMillis();

        System.out.println("普通方式执行10亿次" + (endTime - startTime) + "ms" );
    }

    //反射方式调用
    public static void test02() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        User user = new User();
        Class c = user.getClass();

        Method getName = c.getDeclaredMethod("getName", null);

        long startTime = System.currentTimeMillis();

        for (int i = 0; i < 1000000000; i++)
            getName.invoke(user,null);

        long endTime = System.currentTimeMillis();

        System.out.println("反射方式执行10亿次" + (endTime - startTime) + "ms" );
    }

    //反射方式调用 关闭检测
    public static void test04() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        User user = new User();
        Class c = user.getClass();

        Method getName = c.getDeclaredMethod("getName", null);
        getName.setAccessible(true);

        long startTime = System.currentTimeMillis();

        for (int i = 0; i < 1000000000; i++)
            getName.invoke(user,null);

        long endTime = System.currentTimeMillis();

        System.out.println("关闭检测执行10亿次" + (endTime - startTime) + "ms" );
    }

    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        test01();
        test02();
        test04();
    }
}
```

普通方式执行10亿次4ms
反射方式执行10亿次3107ms
关闭检测执行10亿次1555ms

### 八、反射操作泛型



> - ParameterizedType：表示一种参数化类型，比如Collection<String>
> - GenericArrayType:表示一种元素类型是参数化类型或者类型变量的数组类型
> - TypeVariable：是各种类型变量的公共接口
> - WildcardType：代表一种通配符类型表达式

```java
// 通过反射获取泛型
public class test04 {
    public void test01(Map<String, User> map, List<User> list) {
        System.out.println("test01");
    }
    
    public Map<String, User> test02() {
        System.out.println("test02");
        return null;
    }
    
    public static void main(String[] args) throws NoSuchMethodException {
        //获取方法
        Method method = test04.class.getMethod("test01", Map.class, List.class);
        Type[] genericParameterTypes = method.getGenericParameterTypes();
        for (Type genericParameterType : genericParameterTypes) {
            System.out.println("#" + genericParameterType);
            //判断是否为参数化类型
            if(genericParameterType instanceof ParameterizedType){
                //.getActualTypeArguments() 获得真实的参数类型
                Type[] actualTypeArguments = ((ParameterizedType) genericParameterType).getActualTypeArguments();
                for (Type actualTypeArgument : actualTypeArguments) {
                    System.out.println(actualTypeArgument);
                }
            }
        }

        method = test04.class.getMethod("test02", null);
        Type genericReturnType = method.getGenericReturnType();

        if(genericReturnType instanceof ParameterizedType){
            Type[] actualTypeArguments = ((ParameterizedType) genericReturnType).getActualTypeArguments();
            for (Type actualTypeArgument : actualTypeArguments) {
                System.out.println(actualTypeArgument);
            }
        }
    }
}

```



### 九、获取注解信息

```java
//练习反射操作注解
public class test05 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException {
        Class c = Class.forName("com.yanjc.tests.Student");

        //通过反射获得注解
        Annotation[] annotations = c.getAnnotations();
        for (Annotation annotation : annotations) {
            System.out.println(annotation);
        }

        //获得注解的value的值
        TableY tableY = (TableY)c.getAnnotation(TableY.class);
        String value = tableY.value();
        System.out.println(value);

        //获得类指定的注解
        Field f = c.getDeclaredField("name");
        FieldY annotation = f.getAnnotation(FieldY.class);
        System.out.println(annotation.columnName());
        System.out.println(annotation.type());
        System.out.println(annotation.length());
    }
}

@TableY("db_student")
class Student{
    @FieldY(columnName = "db_id",type = "int",length = 10)
    private int id;
    @FieldY(columnName = "db_age",type = "int",length = 10)
    private int age;
    @FieldY(columnName = "db_name",type = "varchar",length = 10)
    private String name;

    public Student() {}

    public Student(int id, int age, String name) {
        this.id = id;
        this.age = age;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", age=" + age +
                ", name='" + name + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface TableY{
    String value();
}

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@interface FieldY{
    String columnName();
    String type();
    int length();
}
```

























