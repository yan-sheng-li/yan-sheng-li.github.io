# 自定义JPanel自适应显示图片

> 自定义Swing组件，它封装了一个JPanel，可以用来显示图片，并且该图片可以根据容器的大小自适应调整。你可以通过构造函数传入图片路径。

首先，请确保你的项目中已经有 Swing 的相关依赖。

![](http://cdn.qiniu.liyansheng.top/img/20241114232417.png)

下面是代码示例：

```java
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import javax.imageio.ImageIO;
import java.io.IOException;

public class ImagePanel extends JPanel {
    private BufferedImage image;

    public ImagePanel(String imagePath) {
        try {
            // 读取图片
            image = ImageIO.read(new File(imagePath));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        if (image != null) {
            // 获取面板的宽高
            int panelWidth = getWidth();
            int panelHeight = getHeight();
            // 绘制自适应的图片
            g.drawImage(image, 0, 0, panelWidth, panelHeight, this);
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Image Panel Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 600);

        // 创建自定义的ImagePanel并传入图片路径
        ImagePanel imagePanel = new ImagePanel("path/to/your/image.jpg");
        frame.add(imagePanel);

        frame.setVisible(true);
    }
}
```

### 使用说明

1. **图片路径**：在创建 `ImagePanel` 实例时，将 `"path/to/your/image.jpg"` 替换为你本地图片的实际路径。
2. **运行程序**：当你运行这个程序时，会弹出一个窗口，显示指定的图片。图片会根据窗口的大小自动调整。
3. **自适应效果**：我们在 `paintComponent` 方法中使用 `g.drawImage` 方法，传递窗口的当前宽度和高度，以确保图片能够自适应地填满整个面板。
4. 可以添加到任意面板上
