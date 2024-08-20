# Hugging Face 全家桶

Hugging Face（以下简称🤗）于 2016 年成立，推出了模型托管平台 Hugging Face 和 Transformer 库 `transformers`，将当时学术界的算法快速推向工业界，并基于此迅速构建了一整个生态系统。本文简述🤗全家桶中各包的使用。

- `transformers`
- `tokenizers`
- `datasets`
- `accelerate`
- `evaluate`
- `diffusers`
- `safetensors`
- `gradio`
- `timm`
- `PEFT`
- `Optimum`
- [`Tasks`](https://huggingface.co/tasks)
- `bitsandbytes`
- `candle`

## `transformers`

`transformers` 是🤗推出的第一款开源深度学习库，最开始是为了提供 Transformer 的一个实现，后来加入了可拓展性，独立出了一个 [`Trainer`](https://huggingface.co/docs/transformers/main_classes/trainer)，提供了多机多卡、DeepSpeed 集成等（代价是有 [100 多个参数](https://huggingface.co/docs/transformers/v4.44.0/en/main_classes/trainer#transformers.TrainingArguments)。但如果自己实现一个可以被 `Trainer` 训练的模型，还是比较麻烦。

以 `BERT` 为例子的具体使用可以看[另一篇文章](../../../../Research/MultiModal/Huggingface-transformers.md)

## `tokenizers`

和 `transformers` 配套使用（或许也可以说是独立出来的），用于将文本转为 token。详情请了解 NLP 中 `tokenize` 的过程。

## `datasets`

~~天下苦 `torch.utils.data.Dataset` 久矣~~

`datasets` 用于加载数据集，依靠 [Apache Arrow](https://arrow.apache.org/)，加载速度更快。

## `accelerate`

如果有人自己写过 `DistributedDataParallel` 就会知道它是个什么噩梦。但 `accelerate` 极大程度上地减小了多机多卡（或者单机多卡）训练的认知负担，方便快速进行多机多卡训练。

## `evaluate`

`evaluate` 是以[一个组织](https://huggingface.co/evaluate-metric)的形式存在于🤗上的，而具体指标就是🤗的一个代码库。但是一个 Accuracy 你托管在云上，用的时候还要下载就特别离谱。还是觉得 `torchmetrics` 好用。

## `diffusers`

`diffusers` 是一个专门用于训练和推理扩散模型（如 DDPM、DDPM 等）的库，图像生成领域的 `transformers`。

## `safetensors`

为了解决 `pickle` 的安全性问题而用 `Rust` 写的保存模型的库。

## `gradio`

`gradio` 是一个用于快速搭建 Web 应用的库，可以快速搭建一个模型推理的 Web 应用。但需要联网才能正常使用（🤗你是多喜欢联网啊），界面也比较单一。相比之下我更喜欢 `streamlit`。

## `timm`

`rwightman` 大佬创建的视觉模型的库，记忆中比 `transformers` 还要早一点，后来被🤗给收编了，成为了🤗上的[一个组织](https://huggingface.co/timm)。

## `candle`

用 `Rust` 写的一套支持 CUDA 的深度学习库（🤗是得多爱 `Rust`……），但我没用过我也很少见有人用。

## 总结

这些库基本都是以 `transformers` 为中心的，可以说用了 `transformers` 就不得不用他的全家桶。但说实在的，对于搭建模型用于训练，我还是觉得 PyTorch Lightning 更好用一些。

另外🤗的库的 Public API **都不怎么稳定**，使用的时候建议

1. 保存小版本号
2. 不要随意升级
3. 不要复用环境
