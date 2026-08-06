# I.0.0: "Love foreswore me."

> Why, love forswore me in my mother's womb:
> And, for I should not deal in her soft laws,
> She did corrupt frail nature with some bribe,
> To shrink mine arm up like a wither'd shrub;
> To make an envious mountain on my back,
> Where sits deformity to mock my body;
> To shape my legs of an unequal size;
> To disproportion me in every part,
> Like to a chaos, or an unlick'd bear-whelp
> That carries no impression like the dam.
> And am I then a man to be beloved?
> O monstrous fault, to harbour such a thought!

When I get depressed, as happens relatively regularly; or if I am anxious, which happens frequently, I do the same
thing. I mope, and I read about something new.

Mathematics is such a rich subject because it is so unrestricted in its application. There is virtually no target that
mathematical thinking won't help you zero, and no subject offlimits to the value that mathematical rigor can provide.
Mathematics is a general toolset, and as such it is always easy (or has been for me) to find something new and
interesting to learn in mathematics.

A long time ago, while working on my degree, I took an independent study with my advisor on Topology. I actually wanted
to study something else -- Combinatorial Species -- but I lacked the Algebraic, Topological, and Category Theoretic
background. My advisor, who hadn't really hung around the Category Theory spaces that were popular in 2005 (which, to me
at the time, meant hanging around in #haskell on IRC), confidently and correctly redirected me towards topology; since I
was already doing a separate ISP on Algebra with another professor and a friend from the math club. Two out of three
ain't bad. However, while working through [Munkres] or [Gamelin&Greene] or whatever topology book she assigned, I can't
really remember which, I would take time out to read about different Category Theorists and the more advanced ideas I
couldn't quite grasp for yet. I stared blankly at MacLane and thought deep and largely fruitless thoughts about Diagrams
and Morphisms and Functors. I had enough knowledge to be dangerous -- just as we have had in the previous chapter -- I
could construct things that matched my intuition, but it felt like free climbing. There was no safety, no security, just
an uncomfortable distance between my ideas and the ground. I knew the Type System was Powerful (tm), but I had no idea
_why_ my stuff worked, just that it did, or at least seemed to.

Towards the end of my degree, I had my first encounter with Major Depression. I think the very first unambiguous impact
was when the stress and anxiety got so profound that I didn't sleep for the two days running up to my final Real
Analysis exam. I came in to take my final on the Friday. The final had been on the Thursday. My professor asked what
happened. I -- exhausted -- told her I had been up for about 40 or 50 hours trying to untangle my life. I had no
prospects at a job, I had to somehow study for GRE and the Subject Tests, and I had to find money to pay for it all. I
hadn't applied to Grad School, I couldn't for a variety of financial reasons, and I was in a flat spin.

I didn't say all that in so many words, as I recall I just said, "I haven't been sleeping."

I don't remember the words she said, but I remember her telling me that I could take the test on monday, but only if I
went home and slept.

I went home, slept the weekend, and passed (barely) the test. I am sure I recieved many sympathy points.

On the last day of that semester, the same professor handed me a copy of _Complex Variables and Applications_ [CITE],
and told me that I was destined to do "Name Brand Math."

I don't think I ever did anything name brand, but maybe this counts.

After school I went to work, I got a job writing code for a couple different places until I finally landed somewhere
where I stuck, and spent about fifteen years healing from all the shit that left me in the broken and depressed place I
was in.

Along the way, I found myself some heroes (and villains) to look up to. I'm gonna take a minute to talk about them.

# I.1.0: Euler and Dr. Math

> Early experiences with the internet and math. Algebra and formal series.

# I.2.0: Erdos and the SF

> Erdos as personal hero, reorienting my morality around harm-minimization by the SF metaphor. Mathematics as
> collaboration. Graph Theory, Topology.

# I.3.0: Grothendieck and the Rising Sea

> Je pourrais illustrer la ... approche, en gardant l’image de la noix qu’il s’agit d’ouvrir. La premi`ere parabole qui
> m’est venue `a l’esprit tantˆot, c’est qu’on plonge la noix dans un liquide ´emollient, de l’eau simplement pourquoi
> pas, de temps en temps on frotte pour qu’elle p´en`etre mieux, pour le reste on laisse faire le temps. La coque
> s’assouplit au fil des semaines et des mois — quand le temps est mˆur, une pression de la main suffit, la coque
> s’ouvre comme celle d’un avocat mˆur `a point! . . . L’image qui m’´etait venue il y a quelques semaines ´etait
> diff´erente encore, la chose inconnue qu’il s’agit de connaˆıtre m’apparaissait comme quelque ´etendue de terre ou de
> marnes compactes, r´eticente `a se laisser p´en´etrer. ... La mer s’avance insensiblement et sans bruit, rien ne
> semble se casser rien ne bouge l’eau est si loin on l’entend `a peine... Pourtant elle finit par entourer la substance
> r´etive...
>
> I can illustrate the ... approach with the ... image of a nut to be opened. The first analogy that came to my mind is
> of immersing the nut in some softening liquid, and why not simply water? From time to time you rub so the liquid
> penetrates better, and otherwise you let time pass. The shell becomes more flexible through weeks and months — when
> the time is ripe, hand pressure is enough, the shell opens like a perfectly ripened avocado! . . . A different image
> came to me a few weeks ago. The unknown thing to be known appeared to me as some stretch of earth or hard marl,
> resisting penetration ... the sea advances insensibly in silence, nothing seems to happen, nothing moves, the water is
> so far off you hardly hear it ... yet finally it surrounds the resistant substance.
>
> — A. Grothendieck [Gr5, p. 552-3], translation by C. McLarty [Mc, p. 1]
> Translation from [Vakil, p.11]

Alexandre Grothendieck was a French Mathematician, he studied many things, but most famously and most importantly for
our purposes he studied Algebraic Geometry. A subfield of mathematics focused on the classification and study of
geometric structures. He popularized a particular approach that I suspect will feel familiar to those of you who may
have falling into the classification given in 0.2.4 -- a 'bottom up' approach which is not necessarily analytic (in the
sense we are not studying deeply the properties of a single or small set of structures), nor algebraic (in the sense that
we are not focused on the classification of the structures we discover), nor topological (in the sense that the
connecteness of the structures we study isn't the point). Rather, he focuses on all and none of these simultaneously. He
builds a small structure, analyzes it, modifies it to fit new purposes, and then finds where it might classify in the
heirarchy. Mathematical processes become tools rather than targets to aim our intuition at. The _act of analysis_ is no
longer the point; the _act of classification_ is not the goal; the tools of topology are used and valuable, but they are
_means to an end_. The goal isn't to solve a single problem, hunt a specific path through the graph, and come back with
a single prize. Rather, the aim is to _drown the problems wholesale_, to do mathematics _en masse_.

This approach is what we have been taking so far. We have focused not on the geometry itself, but how we _represent
arguments about the geometry_. We analyzed the proofs as a structure, we found the underlying structure, built it,
classified it, and then used that new knowledge to build a better structure.

When I realized this in my first attempts at this approach, I realized I had stumbled onto something powerful. I looked
around me and felt my feet get wet as the water levels began to rise. I hadn't placed it all together (and we won't
until chapter five), but this was the first inkling that I had started a process that would lead to... well... all of
this.

> TODO: Add some details about Grothendieck's life and history

# I.4.0: Richard III

I've been quoting a speech from Richard this whole time. I'm not done with it yet, but the name of this book is taken
from this speech.

I have a heterodox opinion from most mathematicians, I suspect. I think Mathematics should be an Arts degree, not a
Sciences one.

I love this speech because Richard spends the whole thing in classic Solliloquoy style; musing to himself outloud, but
diegetically. We're meant to understand Richard is _actually_ saying this, if not audibly this is at least his internal
reality. We're getting insight into how he _feels_ about how the succession crisis and War of the Roses has played out
so far. He expresses frustration and grief over his feelings about the inadequacy of his brother, now-King Edward, and
how his own experience has seemed so stacked against him. He shouts to the audience and himself, "Love foreswore me in
my Mother's womb" and lists the ailments, physical and mental, comparing himself to the ancient belief about how bears
were made by their mother's literally licking them into shape. He compares himself too to a "Chaos" -- a reference
probably better understood through the greek meaning of 'χάος' -- a gaping abyss, cosmic emptiness -- the _void_ that
existed prior to the Christian account of Creation. Richard is _empty_, devoid of purpose but full of possibilities, and
he struggles to reconcile his own lack of achievement in the context of his undeserving sibling. This brother who has
recieved everything but earned nothing; compared to Richard, who has earned everything, but recieves nothing.

My favorite part of the speech follows this section. Richard has sunk to the depths of despair, and he knows it, and it
is in this moment that he makes a turn. Till now he was a scheming supporter of the Yorkist push for power, he helped
seat his undeserving brother, he helped push away the old power and at this point things are seemingly settled; but soon
chaos will erupt again, and Richard will reveal his true intentions and plan as he chases power. It's right here where
we have to realize something important about the Character of Richard III.

I think Shakespeare, intentionally or otherwise, left open a reading of this classic villain that is likely among the
more heterodox opinions I hold (you've seen two so far, lucky you). I think Richard _knows_ he's in a play. Everything
we see about Richard emphasizes his cleverness and reliance on wit and subterfuge to trick and cause to underestimate
every person around him. In public he is deferent, in private, devious. I think he _knows_ it's a play. I think he's
_read the script and knows how it ends_, and so despite his deepening despair in this moment, he knows that the audience
is there, listening to it, being lulled into the same false sense of security as every other character in the play. So
with all this sympathy he has drawn up and braided together, he has tied himself a noose, and he has placed it around
all of our necks, and with the next movement of this speech, you get to feel it cinch around your neck like every other
victim of his machinations so far.

I have tied no noose for you, reader, but I have been playing a trick on you. It will be revealed soon, but there is a
reason I chose this speech and there is a reason we have been asking these questions the way we've been asking them.

Look around you, do you see the water rising?
