import * as React from 'react';

export default ({ piral }) => (
  <div>
    <h1>Title</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id cum,
      laborum, suscipit aliquid qui nemo consequatur perferendis, explicabo
      possimus aliquam magnam sunt magni? Quo doloremque ullam autem
      perspiciatis sequi?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam
      omnis labore beatae consequatur mollitia, sunt unde soluta veritatis aut
      corporis? Facilis, harum corrupti. Vero laudantium nam unde deserunt
      quibusdam!
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nostrum
      eum deleniti quos accusantium et cumque sit perferendis eligendi facilis
      velit corrupti totam tenetur ratione, beatae similique eos laudantium
      soluta.
    </p>
    <div className="boxed">
      <p>
        The little counter below is a component exposed by <i>some</i> micro
        frontend. In this example (just one micro frontend) it actually comes
        from the same micro frontend, but that does not need to be the case.
        Also, try changing the name - the page will not stop working. This kind
        of loose coupling is what makes Piral instances <i>scale really well</i>
        .
      </p>
      <piral.Extension name="my-extension" />
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi
      libero quam perferendis consequatur? Inventore porro iure repudiandae
      veniam quas, incidunt sunt vel eaque delectus ab laudantium, deserunt sit
      doloribus!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eligendi
      praesentium beatae quas nihil nobis accusamus rerum voluptates deserunt.
      Necessitatibus nam similique harum beatae nostrum eligendi id quaerat
      blanditiis quidem.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex minus est
      ullam nulla alias ea praesentium vel qui, dolorum omnis in soluta debitis!
      Accusantium quaerat ea blanditiis porro cumque eos.
    </p>
  </div>
);
