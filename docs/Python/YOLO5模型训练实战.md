# YOLO5模型训练实战

> 环境：colab
>
> 数据集这里找：https://universe.roboflow.com/

## 代码拉取

```bash
!git clone https://github.com/ultralytics/yolov5
%cd yolov5
!pip install -r requirements.txt
```

## 官方示例验证

```bash
!python detect.py --weights yolov5s.pt --source data/images
```

```text
Creating new Ultralytics Settings v0.0.6 file ✅ 
View Ultralytics Settings with 'yolo settings' or at '/root/.config/Ultralytics/settings.json'
Update Settings with 'yolo settings key=value', i.e. 'yolo settings runs_dir=path/to/dir'. For help see https://docs.ultralytics.com/quickstart/#ultralytics-settings.
detect: weights=['yolov5s.pt'], source=data/images, data=data/coco128.yaml, imgsz=[640, 640], conf_thres=0.25, iou_thres=0.45, max_det=1000, device=, view_img=False, save_txt=False, save_format=0, save_csv=False, save_conf=False, save_crop=False, nosave=False, classes=None, agnostic_nms=False, augment=False, visualize=False, update=False, project=runs/detect, name=exp, exist_ok=False, line_thickness=3, hide_labels=False, hide_conf=False, half=False, dnn=False, vid_stride=1
YOLOv5 🚀 v7.0-453-geed9bc19 Python-3.12.12 torch-2.9.0+cu126 CUDA:0 (Tesla T4, 15095MiB)

Downloading https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5s.pt to yolov5s.pt...
100% 14.1M/14.1M [00:00<00:00, 49.1MB/s]

Fusing layers... 
YOLOv5s summary: 213 layers, 7225885 parameters, 0 gradients, 16.4 GFLOPs
image 1/2 /content/yolov5/data/images/bus.jpg: 640x480 4 persons, 1 bus, 32.7ms
image 2/2 /content/yolov5/data/images/zidane.jpg: 384x640 2 persons, 2 ties, 32.9ms
Speed: 0.6ms pre-process, 32.8ms inference, 109.7ms NMS per image at shape (1, 3, 640, 640)
Results saved to runs/detect/exp
```

![image-20260105132507654](http://cdn.qiniu.liyansheng.top/img/image-20260105132507654.png)

## 自定义数据集

下载

```bash
!pip install roboflow
from roboflow import Roboflow
rf = Roboflow(api_key="IpcOM2mvib9mZ1AZY7iT")
project = rf.workspace("taisei").project("person-eccaa")
version = project.version(2)
dataset = version.download("yolov5")
```

完成后，数据集会放到项目根目录下

![image-20260105132815776](http://cdn.qiniu.liyansheng.top/img/image-20260105132815776.png)

## 模型训练

```bash
!python train.py \
  --device 0 \
  --img 640 \
  --batch 16 \
  --epochs 30 \
  --data person-2/data.yaml \
  --weights yolov5s.pt \
  --name yolo5_demo
```

![image-20260105133453705](http://cdn.qiniu.liyansheng.top/img/image-20260105133453705.png)

## 模型验证

```bash
import gradio as gr
import torch
import cv2
import numpy as np
from PIL import Image

# 1. 加载 YOLOv5 模型
model = torch.hub.load(
    'ultralytics/yolov5',
    'custom',
    path='runs/train/yolo5_demo/weights/best.pt',
    force_reload=False
)

model.conf = 0.25  # 置信度阈值
model.iou = 0.45   # NMS IoU 阈值

# 2. 推理函数
def detect_image(img):
    """
    img: PIL Image
    return: PIL Image with bbox
    """
    # PIL -> numpy
    img_np = np.array(img)

    # YOLOv5 推理
    results = model(img_np)

    # 渲染检测框
    results.render()

    # numpy -> PIL
    result_img = Image.fromarray(results.ims[0])

    return result_img


# 3. Gradio 界面
demo = gr.Interface(
    fn=detect_image,
    inputs=gr.Image(type="pil", label="上传图片"),
    outputs=gr.Image(type="pil", label="检测结果"),
    title="YOLOv5 Person Detection Demo",
    description="基于 YOLOv5 + Gradio 的目标检测测试页面"
)

# 4. 启动
demo.launch(share=True)
```

![image-20260105133758223](http://cdn.qiniu.liyansheng.top/img/image-20260105133758223.png)