import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  Body,
  Header,
  SubTitle,
  Whisper,
  Image,
  CustomArticleComponents,
  BulletList,
  BulletBody,
} from "../Util/Components";

import people_video from "./Assets/ocai_ltd/multi_person.gif";
import person_video_audio from "./Assets/ocai_ltd/person_video_audio.gif";
import vasa1diagram from "./Assets/ocai_ltd/vasa1diagram.png";
import new_dataset from "./Assets/ocai_ltd/new_dataset.gif";
import training1val from "./Assets/ocai_ltd/training1val.jpg";
import megaportraits_diagram from "./Assets/ocai_ltd/megaportraits_diagram.png";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const OCAI: React.FunctionComponent = () => {
  return (
    <Container>
      <Header title="OCAI LTD" links={[]} color="#ff6463" />
      <Body>
        OCAI LTD, a small AI company, gave me a two month contract to try
        something <i>way</i> outside of my comfort zone. They wanted someone who
        could go beyond simple fine-tunes on open-source models, someone who
        could do more substantial AI research.
      </Body>
      <Body>
        Ever since I took my deep learning course during my time at UT Austin,
        I've been obsessed with AI. I was blown away by what was possible, and
        how much more there is still to be discovered. My course only scratched
        the surface, and I spent a significant amount of my own time over the
        next year catching up with the latest research and exploring my own
        ideas, such as{" "}
        <InlineLink type="external" href="https://arxiv.org/abs/2309.12996">
          Point Cloud Networks
        </InlineLink>
        — one of the first idea's I explored deeply, with the goal of reducing
        the # of parameters in linear layers.
      </Body>
      <Body>
        Here, in a sort of post-mortem style report, I reflect on my
        experience/process working with OCAI LTD on this contract, what I
        learned, and what I look forward to in the future.
      </Body>
      <SubTitle>Deciding what to work on</SubTitle>
      <Body>
        When we were setting up the contract, they told me they wanted to do
        something with video generation. The company and budget were both very
        small. As much as I like to believe I can achieve anything I put my mind
        to, I knew generic video generation like{" "}
        <InlineLink type="external" href="https://openai.com/index/sora/">
          Sora
        </InlineLink>{" "}
        or{" "}
        <InlineLink type="external" href="https://runwayml.com/">
          Runway
        </InlineLink>{" "}
        was out of the question. Even if I stuck with low resolution, even if I
        could nail the architecture, it simply would never be possible to
        achieve anything near state-of-the-art (<b>SOTA</b>) on our budget.
      </Body>
      <Body>
        I spent the next couple of days reviewing the latest in the literature
        on video generation and diffusion models. Some key papers were:
      </Body>
      <BulletList
        content={[
          <BulletBody>
            <InlineLink
              type="external"
              href="https://wayve.ai/thinking/introducing-gaia1/"
            >
              GAIA-1
            </InlineLink>
          </BulletBody>,
          <BulletBody>
            <InlineLink type="external" href="https://arxiv.org/abs/2301.08243">
              I-JEPA
            </InlineLink>
          </BulletBody>,
          <BulletBody>
            <InlineLink type="external" href="https://arxiv.org/abs/2212.07525">
              Data2vec 2.0
            </InlineLink>
          </BulletBody>,
          <BulletBody>
            <InlineLink type="external" href="https://arxiv.org/abs/2402.17177">
              SORA Technical Report
            </InlineLink>
          </BulletBody>,
          <BulletBody>
            <InlineLink type="external" href="https://arxiv.org/abs/2112.10752">
              High-Res Latent Diffusion Models
            </InlineLink>
          </BulletBody>,
          <BulletBody>
            <InlineLink type="external" href="https://arxiv.org/abs/2304.08818">
              Align your Latents
            </InlineLink>
          </BulletBody>,
          <BulletBody>
            <InlineLink
              type="external"
              href="https://github.com/NVIDIA/pix2pixHD"
            >
              Pix2pixHD
            </InlineLink>
          </BulletBody>,
          <BulletBody>
            <InlineLink type="external" href="https://dit.hunyuan.tencent.com/">
              Hunyuan DiT
            </InlineLink>
          </BulletBody>,
        ]}
      />
      <Body>
        Many of these papers were sources of inspiration for methods I would try
        later on. GAIA-1 was especially interesting to me. It's a paper that I
        had looked at many months earlier, before the release of SORA. It uses a
        similar architecture to SORA, and from what I can tell, it is one of the
        first papers to employ such an architecture. The GAIA-1 model does{" "}
        <i>next-world-state-prediction</i> for self-driving car footage, with
        the goal of building an internal world model and to generate synthetic
        trajectories for self-driving cars to train on. When I initially read
        it, what excited me the most was the quality of results given the model
        and dataset sizes. It actually seemed like a tractable problem. This
        gave me the intuition that, given a narrow enough task, it could be
        feasible for me to train a generative video model with a small budget
        and relative lack of experience training models at scale.
      </Body>
      <Body>
        OCAI LTD had already been building out companion-style chatbot products.
        Around the same time I came across{" "}
        <InlineLink
          type="external"
          href="https://www.microsoft.com/en-us/research/project/vasa-1/"
        >
          VASA-1
        </InlineLink>
        . This was it— talking head generation was the task I was going to work
        on. VASA-1 was the shooting star{" "}
        <Whisper>
          (and believe me that we made it very clear this project was a shooting
          star)
        </Whisper>
        . Near-lifelike, audio driven, talking head video generation with
        real-time inference.{" "}
        <Whisper>
          Specifically the contract was for the R&D and subsequent codebase
        </Whisper>
        . Other important talking head papers that I referenced were{" "}
        <InlineLink
          type="external"
          href="https://humanaigc.github.io/emote-portrait-alive/"
        >
          EMO
        </InlineLink>{" "}
        and{" "}
        <InlineLink
          type="external"
          href="https://neeek2303.github.io/MegaPortraits/"
        >
          MegaPortraits
        </InlineLink>
        .
      </Body>

      <SubTitle>Breaking down the problem</SubTitle>
      <Body>
        There are three main components to an audio-driven talking head model.
        The first component is a method to encode the static visual features of
        a person's face, their <i>identity</i>. The second piece is encoding the{" "}
        <i>'state'</i> of each video frame (where the person's eyes are pointed,
        if they are blinking, the angle of their head-tilt, etc.). We call this
        the <i>motion encoding</i>.
      </Body>
      <Image
        src={vasa1diagram}
        displayType="regular"
        caption="Diagram from VASA-1 paper (https://arxiv.org/pdf/2404.10667)"
      />
      <Body>
        The final component is the audio driver. This acts as the{" "}
        <i>'controller'</i> of the overall system. Our goal is to take a series
        of audio tokens, and convert them into a series of coherent motion
        encodings, which, in turn, can be decoded with the identity features
        into a set of video frames.{" "}
      </Body>
      <SubTitle>The Dataset</SubTitle>
      <Body>
        {" "}
        <InlineLink
          type="external"
          href="https://www.robots.ox.ac.uk/~vgg/data/voxceleb/vox2.html"
        >
          VoxCeleb2
        </InlineLink>{" "}
        is a public dataset consisting of 6,112 identities of various
        celebrities across 150,480 videos, totaling to 2,442 hours. This was the
        main dataset I chose to use. Initially I used a version of the dataset
        available on HuggingFace, pre-compiled into zip files.
      </Body>
      <Body>
        I spent my initial attempts working with this dataset. But one issue
        with this version of the dataset is that it tracks the face
        frame-by-frame and is very zoomed in. This is not ideal, since we would
        like for our model to operate in a still-camera setting and have the
        full face in view.
      </Body>
      <Body>
        Resolving this involves re-compiling the dataset from scratch. If you
        take a look across the landscape of open source talking head models, it
        turns out that the data source is usually the last standing piece that
        is held onto as closed source.{" "}
        <Whisper>
          Yes, yes— the bitter truth is that data <b>really is</b> the moat in
          this lovely world
        </Whisper>
        . Data pipelines are nothing new to me, although{" "}
        <InlineLink type="external" href="https://www.ffmpeg.org/">
          FFMPEG
        </InlineLink>{" "}
        was. The VoxCeleb website gives a list of video URLs with annotations
        for head positions. I used these annotations to calculate a static tube
        around the head in each video, which would capture the entire face. Then
        it was a matter of building out the pipeline: download, trim, crop,{" "}
        <b>and encode</b> each video.
      </Body>
      <Image
        src={new_dataset}
        displayType="regular"
        caption="Left shows a sample from the HuggingFace dataset, right shows the same sample from the new manually compiled dataset, decoded from the VAE latent space."
        innerStyle={{ maxWidth: 400 }}
      />
      <SubTitle variant="h3">
        <b>On Encoding</b>
      </SubTitle>
      <Body>
        During my initial attempts at training with the original HuggingFace
        dataset, I ran into efficiency problems loading in samples for training.
        Loading .mp4 files on the fly is too slow. One option is to convert all
        samples to the .pth format (PyTorch's native format for disk storage)
        prior to training. While the data can be loaded much faster in this
        format, it would no longer be compressed and take up far too much space{" "}
        <Whisper>
          (note that I was bounded to 4TB of storage due to limits on RunPod's
          Network Volumes)
        </Whisper>
        .
      </Body>
      <Body>
        The compromise I decided on was to store the data in the latent space of
        the{" "}
        <InlineLink type="external" href="https://arxiv.org/abs/2307.01952">
          SDXL
        </InlineLink>{" "}
        variational autoencoder (<b>VAE</b>). This was inspired by EMO's design
        choice to work in the latent space of a Stable Diffusion VAE. I was
        already keen on using the Diffusion Transformer (<b>DiT</b>) from
        Hunyuan DiT as a backbone for my model (which uses the SDXL VAE), so
        this fit nicely. The result was that I could store the dataset
        compressed to 5% of the original size, while still being able to load
        into memory at a much faster rate than .mp4 files. Even when samples
        need to be decoded from the VAE latent space, it's still much faster
        loading and passing latent sample through the VAE on a GPU than loading
        from .mp4. The trade-off of this approach is that the VAE latent space
        compression is slightly lossy.
      </Body>
      <SubTitle>Model Development</SubTitle>
      <Body>
        I spent some time re-reviewing several papers. I also spent a decent
        amount of time studying the full diffusion process, reviewing the{" "}
        <InlineLink
          type="external"
          href="https://github.com/Tencent/HunyuanDiT"
        >
          Hunyuan DiT code
        </InlineLink>{" "}
        in detail, since all of the SOTA generative talking-head models were
        diffusion based. I really enjoyed the I-JEPA paper. I like that it
        offers a general tool for visual tasks with the rich set of features its
        model can extract. This also aligns with the use of{" "}
        <InlineLink type="external" href="https://arxiv.org/abs/2006.11477">
          Wav2Vec 2.0
        </InlineLink>{" "}
        in VASA-1 for audio features. So I decided to try I-JEPA for encoding
        the reference photo, and{" "}
        <InlineLink type="external" href="https://arxiv.org/abs/2404.08471">
          V-JEPA
        </InlineLink>{" "}
        for encoding video frames.
      </Body>
      <Image
        src={people_video}
        displayType="regular"
        caption="Left column shows samples from the voxceleb dataset, right column shows the visualization of V-JEPA video features. V-JEPA patch features are translated into RGB space by taking PCA(c=3) of each patches' features, where each patch represents a 16x16 pixel region of the video frame."
        innerStyle={{ maxWidth: 200 }}
      />
      <Body>
        I spent some time building out several visualization tools to validate
        the use of each encoder, as well as to ensure that all of the different
        features were aligned properly along the time dimension. I would also be
        able to repurpose these tools later on for visualization during
        training.
      </Body>
      <Image
        src={person_video_audio}
        displayType="regular"
        caption="Another sample from voxceleb, with audio features. In this case, audio features from Wav2Vec 2.0 are visualized by taking PCA(c=20) on each audio frame (where there are two audio tokens for every video frame). Audio tokens are aligned and slide across the x-axis. The PCA features of each audio token are stacked along the y-axis."
        innerStyle={{ maxWidth: 400 }}
      />
      <Body>
        Putting everything together, I used I-JEPA to encode identity features,
        V-JEPA to encode the motion of previous video frames, and Wav2Vec 2.0 to
        encode audio features. A modified version of the Hunyuan DiT
        architecture was used for next-frame prediction in the SDXL VAE latent
        space. The conditional input to the DiT at any given time step was the
        concatenation of
      </Body>
      <BulletList
        content={[
          <BulletBody>I-JEPA reference photo encodings</BulletBody>,
          <BulletBody>
            V-JEPA motion encodings of frame <i>t-1</i> and <i>t-3</i>
          </BulletBody>,
          <BulletBody>
            Wav2Vec 2.0 audio encodings of audio frame <i>t-50</i>—<i>t+50</i>
          </BulletBody>,
        ]}
      />

      <Image
        src={training1val}
        displayType="regular"
        caption="Visualization of the model inputs and outputs used during training. In the top left section from left-to-right: reference photo with its I-JEPA encoding below, motion frame t-3 with its V-JEPA encoding below, motion frame t-1 with its V-JEPA encoding below. In the bottom left are the audio tokens passed into the model, with the center being at time t. In the rightmost column from top to bottom: the noisy frame for time t, the predicted clean frame for time t, and the target frame for time t."
        innerStyle={{ maxWidth: 600 }}
      />
      <Body>
        After I began training this model, some design flaws started to reveal
        themselves. When we look at MegaPortraits, the paper which VASA-1 bases
        its motion encoder off of, we see that the motion encoding is a heavily
        compressed set of features extracted from each frame. VASA-1's audio
        driver then does next-token prediction <b>in the motion latent space</b>
        .
      </Body>
      <Body>
        My model's motion encoder, V-JEPA, only slightly compresses each frame—
        a lot of visual information ends up encoded into the motion features.
        Our audio driver also predicts directly into latent pixel space, not
        motion space. There are three main problems here. Our motion
        conditioning includes the motion encoding for frame <i>t-1</i>, which is
        very similar to frame <i>t</i>, the target frame for the model to
        predict. Since these V-JEPA encodings hold a lot of visual information,
        the model may be incentivized to simply copy the visual information
        found in the <i>t-1</i> motion encoding instead of learning meaningful
        relationships between the reference photo, past motion, and audio. The
        second problem is that any visual artifacts found in our model's frame
        predictions leak into the motion encodings when we predict the next
        frame, which then end up feeding further into the first problem, leading
        to compounding errors/instability during inference.
      </Body>
      <Body>
        Lastly, V-JEPA is slightly too inefficient for real-time inference,
        which is a key requirement for this project. The design of our model is
        more aligned with EMO, which is able to achieve stability using a U-NET
        architecture as well as several auxillary networks. But EMO is far off
        from real-time inference. After assessing these problems, I took a
        closer look at VASA-1 and MegaPortraits to see what aspects I could
        adopt both for efficiency and inference stability with the time I had
        left.
      </Body>
      <SubTitle>Model (Re)development</SubTitle>
      <Body>
        Before diving into re-architecting the model, I focused on building a
        steady pipeline for the improved dataset I outlined in the previous
        dataset section, to ensure I had something valuable to deliver upon
        completing the contract. After this, with about two weeks remaining, my
        focus turned toward MegaPortraits.
      </Body>
      <Image
        src={megaportraits_diagram}
        displayType="regular"
        caption="Diagram from MegaPortraits paper (https://arxiv.org/abs/2207.07621)"
      />
      <Body>
        The methods from MegaPortraits cover training both the motion and
        identity encoders. The two encoders and their combined "decoder" are
        trained together in a semi-supervised fashion. For training, the basic
        idea is to take two random frames from the same video, one as the{" "}
        <i>reference frame</i>, the other as the <i>motion frame</i>. We encode
        the reference identity and motion with their respective encoders. We
        pass both of these encodings through a network that generates a set of
        transformations. These transformations are then applied to the identity
        encodings, yielding an output of the given identity, contorted into the
        shape/position of the given motion. During training, since both frames
        come from the same video, we re-use the motion frame as the prediction
        target.
      </Body>
      <Body>
        The key is to <i>disentangle</i> the identity and motion (i.e. ensure no
        visual information leaks into the motion encodings). MegaPortraits
        achieves this disentanglement with a meticulously designed architecture
        and extensive set of loss functions to guide the model. If this is done
        successfully, during inference we should be able to control a reference
        photo with a set of motion frames, even if the identity in the motion
        frames differ from the reference, like shown in the diagram above.
      </Body>
      <Body>
        I put together my own implementation of this model. Frankly, I was
        cutting several corners at this point due to time constraints, knowing
        that each training run was going to take quite some time. In
        MegaPortraits there are feature matching losses used in conjunction with
        several pre-trained vision models to encode strong learning signals into
        the gradients. I did not prioritize these and I believe that was a
        mistake. I think these were essential and would contribute to faster
        convergence, allowing for more training attempts. The loss functions I
        used were:
      </Body>
      <BulletList
        content={[
          <BulletBody>
            <b>Reconstruction loss</b> between the model output and target frame
          </BulletBody>,
          <BulletBody>
            <b>GAN hinge loss</b>, with the discriminator trained to distinguish
            between the model output and target frame
          </BulletBody>,
          <BulletBody>
            <b>Feature matching loss</b> between the intermediate layer features
            of the discriminator on the model output and target frame
          </BulletBody>,
          <BulletBody>
            Positive deep <b>cosine similarity loss</b> between the reference
            encodings of the identity and motion frames
          </BulletBody>,
          <BulletBody>
            Negative deep <b>cosine similarity loss</b> between the identity
            encodings of the reference frame and an alternate identity
          </BulletBody>,
        ]}
      />
      <Body>
        Something was off, which I was unable to resolve it in the bit of time
        remaining. The training outputs I was getting were noisy, and it seemed
        that it was combining the background from the reference frame with the
        identity of the motion frame. There are a number of things that may have
        been cause for issue. Many of my hyperparameter selections were
        arbitrary at best. There was a lot of noise in some of the samples (ex:
        see the highly complex background in the sample with Ashton Kutcher
        above, with a crowd of people making motion in the background). And as
        mentioned earlier, I did not have the loss functions on pre-trained
        vision model features that MegaPortraits had.
      </Body>

      <SubTitle>Looking Back, Looking Forward</SubTitle>
      <Body>
        The contract was coming to a close. Around the same time someone else
        was joining on, looking to get deeper into AI research. I wanted a new
        environment— somewhere with the resources available to properly support
        me and the work I would be a part of. Further, I want to be part of
        something bigger than me, and I want to work with others with more
        experience than myself, who I can look up to and learn from. I am
        thankful for OCAI LTD for taking a risk on me, and for giving me the
        opportunity to freely explore this topic. I took some time in the days
        following the contract to meet with the new person to catch them up to
        speed with the repository, the dataset, and my thoughts for next steps.
      </Body>
      <Body>
        If I were to continue working on this task, I would spend time further
        refining the dataset. I would be interested in passing samples through a
        pre-trained segmentation model focused on portraits to remove the
        background to give the model a cleaner signal to train on, working with
        in-painting methods later in the process to fill the background. I would
        also want to introduce more identities by bringing in the{" "}
        <InlineLink
          type="external"
          href="https://github.com/tcwang0509/TalkingHead-1KH"
        >
          TalkingHead-1KH
        </InlineLink>{" "}
        and{" "}
        <InlineLink
          type="external"
          href="https://github.com/deepbrainai-research/koeba"
        >
          Koeba
        </InlineLink>{" "}
        datasets. I would then move on to perfecting the MegaPortraits motion
        controller system— ensuring I was using all of the right loss functions,
        and bring in the necessary pre-trained models both for guidance and as
        backbones. Finally after this, I could focus on driving with audio
        through a DiT like in VASA-1, working in the robust motion latent space
        of the MegaPortraits model.
      </Body>
      <Body>
        Sometimes when I'm building AI, I think, "That's it, That worked?"{" "}
        <i>and marvel at how easy it can be</i>. Other times I am humbled by how
        finicky a system and its hyperparameters are. How easily the flow of
        gradients may slip between the intended meaning of a loss function. It's
        a feeling familiar to when I first started programming a long time ago,
        shifting focus between the simplicity of the core principles and the
        particularity the compiler insists on when I want to do something so
        simple.
      </Body>
      <Body>
        There were many humbling moments this past couple of months. I am glad I
        had the opportunity here to not just learn through instruction, but to
        internalize many of the realities of training AI systems at scale, to
        feel the inertia of such massive data, through trial & error.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
