---
layout: page
title: "DySENSE: Dynamic Satellite-based Energy Synthesis for Sustainable Environment with Climate"
description: A text-conditioned joint image–label diffusion model that generates paired satellite images and segmentation masks from land-use and climate prompts, used to improve urban-energy semantic segmentation under limited real data.
img:
importance: 1
category: research
---

DySENSE is a diffusion-based multimodal generative framework for satellite imagery, urban energy, and climate. Its core (the JoDiffusion codebase) is a **text-conditioned joint image–label diffusion pipeline**: instead of generating an image and then labelling it, the model **denoises the satellite image and its semantic segmentation mask jointly**, producing perfectly aligned image–label pairs that can serve as synthetic training data for downstream segmentation.

### Approach

- **Dual-prompt conditioning** — a land-use prompt is encoded by a frozen CLIP text encoder, while a climate/weather prompt (temperature, precipitation, solar radiation, etc.) is encoded by **RemoteCLIP**. The two 77-token sequences are concatenated into a 154-token condition, letting climate context steer generation.
- **U-ViT joint denoiser** (`JoDiffusionModel`) — fuses text tokens with image VAE latents, image CLIP latents, and label latents in one transformer, supporting `text2img` and fully `joint` generation modes with classifier-free guidance.
- **Lightweight labe