#!/bin/bash
# 设置中国镜像站
export HF_ENDPOINT=https://hf-mirror.com
# 激活虚拟环境
eval "$(conda shell.bash hook)"
conda activate StableDiffusionWebUI
# 进入StableDiffusionWebUI目录，注意修改为实际路径
cd /usr/local/open/stable-diffusion-webui/
# 启动服务，首次启动会自动下载模型，根据需要修改参数
./webui.sh