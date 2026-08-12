+++
title = "Locus"
date = 2026-08-07
draft = true
extra.draft_number = 0
extra.draft_note = ""
+++

Dear Nobody-in-particular,

I'm going to assume you know the language of Category Theory. That does not mean you need to understand and be an expert
category theorist, for the most part you shouldn't notice it too much, but I will need to say some Category Words and
I don't want them to startle you.

Let's talk about Geometry. I have a bone to pick with it.

In the beginning Εὐκλείδης wrote Στοιχεῖα, and set out to do something novel, _prove_ that the well understood geometric
intuitions that he and other mathematicians of Ancient Greece shared were, in fact, true beyond doubt. It was
impossible, of course, to do this perfectly -- one must still assume _something_ -- but it wasn't impossible to reduce
that set of beliefs to a minimum number of fundamental intuitions that must be accepted, which when combined with the
tool of logic would allow you to deduce far more intricate and difficult ideas that must follow in their truthfulness.

The idea was right, and the approach sound. As with all initial attempts, it was lacking. While _Elements_, as it is
known to us now, did a good job of identifing what should be done; it made big leaps and had proofs that relied on
nontrivial postulates. Then Hilbert came and refined the idea, followed again by Tarski. They used a more refined
version of the same tools as Euclid, resulting in axiomatizations in terms of Set Theory and Logic (in the case of
Hilbert, who we will reference primarily), and First Order Logic with Axiom Schemas (for Tarski).

Then there's me. I have no right to argue against what any of these mathematicians have built, but none the less, I
complain. The problem I have is this -- the axiomatizations for _all_ of these are structured as abstract rules about
how points behave, but points are an _artifact_ of something _real_. Points are the _result of me putting pencil to
paper_. Lines are _what happen when I draw one_. They aren't abstract things, and the axioms don't _encode what I do
when I draw a diagram_, they instead constrain the behavior of the result of my actions. This in and of itself is a
reasonable tradeoff, but I _hate_ it.

The problem is I was raised wrong, and my ability to doubt stuff is very overdeveloped, and I can _doubt_ these axioms,
in a way I couldn't doubt, say, an axiom that sounded more like:

> I can draw a line with a straightedge.

or

> I can draw a point on paper.

or

> I can imagine an arbitrarily large paper to draw on.

but not:

> For any line, there exists a point not on it.

What about the places where that isn't true? I can't imagine a scenario I'd care about a concept of 'Geometry' where I
couldn't draw a line with a straightedge -- that action doesn't feel mathematical, it feels _primitive_. I can certainly
imagine a (pretty boring) world where there _isn't_ a point off the 'line'. It seems pretty reasonable to think about
even.

I'll tell you what did it, when I learned about the Parallel Postulate and how it could be doubted. Once I learned I
_could_ doubt these things, it was a race to see how many I could doubt. I was horrified to find it was all of them.

Set Theory is the worst. I don't trust it, it's squirrelly. If I had one wish it would be that we never invented Sets.
Set Theory is the mathematical equivalent, in my deeply unprofessional opinion, of untyped programming in late 00's
Javascript. Set Theory is systems programming before C.

While working on [Geometry is your friend](TODO: LINK), I sat with this discomfort a lot as I worked through the
theorems. Part of what it led me to is this question:

> Can you build an axiomatization of Geometry that more directly encodes the act of doing it?

This is not entirely new territory. You pass by constructability, operads, and a few others on the way. But my goal was
to have my axioms be closer to axioms I like.

I started with:

> I can imagine an arbitrarily large, piece of paper, the edges of which I can never reach.

> I can name points on this paper by drawing a dot and writing a name near it.

This, to me, is not the same as the quantified axioms of Hilbert or Tarski. It is something different, more
constructive, more _instructive_. It's a little algorithm that captures what it is you're doing, the problem is
formalizing this. We accept that "For any line, there exists a point not on it" really "means" $$\forall L :
\text{Line}, \exists P : \text{Point}, P \notin L$$. Where a $$\text{Line}$$ is a set of points






