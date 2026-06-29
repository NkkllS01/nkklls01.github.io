---
layout: page
title: Multimodal Attention Fusion for Audio-Visual Emotion Recognition
description: An audio-visual emotion recognition framework that fuses speech and facial cues through gated fusion and cross-attention, evaluated on RAVDESS.
img:
importance: 2
category: research
---

Built an audio-visual emotion recognition framework that combines speech and facial cues through **multimodal attention fusion**. The work studies how to extract discriminative unimodal representations and then integrate them effectively, comparing two complementary fusion strategies against audio-only and video-only baselines.

### Approach

- **Audio encoder** — pretrained `microsoft/wavlm-base` producing 768-dim contextual speech features; the full token sequence is retained for token-level fusion.
- **Video encoder** — ResNet18 (torchvision) over 8 sampled RGB frames (112×112), giving a 512-dim per-frame feature sequence with optional MediaPipe face cropping.
- **Gated fusion** — projects pooled audio/video features into a shared latent space and learns a scalar gate that adaptively weights each modality by its reliability, with modality dropout for robustness.
- **Cross-attention fusion** — projects both modalities into a common attention space and models bidirectional, token-level audio↔video interactions via multi-head attention before pooling and classification.

### Key Details

- Evaluated on the **RAVDESS** benchmark (24 actors, 8 emotion classes) using a stratified per-emotion 70/15/15 split, pairing voice-only audio with face-only video.
- Noise-aware audio augmentation (clean/medium/heavy curriculum) and visual augmentation to improve robustness; two-stage warm-start training for the cross-attention variant.
- **Gated fusion reached 93.3% accuracy and cross-attention 92.0%**, both clearly above the audio-only (81.3%) and video-only (77.8%) baselines, confirming that multimodal fusion improves emotion classification.
- Reported accuracy, precision, recall, F1 alongside model-efficiency metrics (parameters, GFLOPs, inference latency).
- Co-authored research project at NUS-ISS (Aug 2025 – Feb 2026).

### Technologies

PyTorch, WavLM, ResNet18, multi-head cross-attention, gated fusion, multimodal fusion, RAVDESS, torchinfo

### Status

Manuscript submitted to IEEE SPMB 2026 (under review).

### Links

[Code](https://github.com/NUS-AIS-25-PR/Multimodal-Attention-Fusion-for-Audio-Visual-Emotion-R