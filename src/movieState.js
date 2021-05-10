//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      movieData:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repudiandae odio eveniet consectetur itaque nam quod adipisci ipsum ab dolorem nihil consequuntur autem vel, quos sequi iure amet hic voluptates. Earum ducimus deserunt, dolor neque dicta et blanditiis labore non. Facere aspernatur inventore eaque necessitatibus officia fugiat delectus suscipit natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repudiandae odio eveniet consectetur itaque nam quod adipisci ipsum ab dolorem nihil consequuntur autem vel, quos sequi iure amet hic voluptates. Earum ducimus deserunt, dolor neque dicta et blanditiis labore non. Facere aspernatur inventore eaque necessitatibus officia fugiat delectus suscipit natus.",
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      movieData:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repudiandae odio eveniet consectetur itaque nam quod adipisci ipsum ab dolorem nihil consequuntur autem vel, quos sequi iure amet hic voluptates. Earum ducimus deserunt, dolor neque dicta et blanditiis labore non. Facere aspernatur inventore eaque necessitatibus officia fugiat delectus suscipit natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repudiandae odio eveniet consectetur itaque nam quod adipisci ipsum ab dolorem nihil consequuntur autem vel, quos sequi iure amet hic voluptates. Earum ducimus deserunt, dolor neque dicta et blanditiis labore non. Facere aspernatur inventore eaque necessitatibus officia fugiat delectus suscipit natus.",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      movieData:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repudiandae odio eveniet consectetur itaque nam quod adipisci ipsum ab dolorem nihil consequuntur autem vel, quos sequi iure amet hic voluptates. Earum ducimus deserunt, dolor neque dicta et blanditiis labore non. Facere aspernatur inventore eaque necessitatibus officia fugiat delectus suscipit natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repudiandae odio eveniet consectetur itaque nam quod adipisci ipsum ab dolorem nihil consequuntur autem vel, quos sequi iure amet hic voluptates. Earum ducimus deserunt, dolor neque dicta et blanditiis labore non. Facere aspernatur inventore eaque necessitatibus officia fugiat delectus suscipit natus.",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
