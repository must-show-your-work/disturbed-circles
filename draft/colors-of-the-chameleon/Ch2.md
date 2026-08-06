# 2.0.0: "Chiding the Sea"

> Like one that stands upon a promontory,
> And spies a far-off shore where he would tread,
> Wishing his foot were equal with his eye,
> And chides the sea that sunders him from thence,
> Saying, he'll lade it dry to have his way:
> So do I wish the crown, being so far off;
> And so I chide the means that keeps me from it;

There are many different ways to divide up approaches to mathematics. You might distinguish whether you are a classifier
(algebra), dissector (analysis), or connector (topology). You might prefer to study mathematics as an artistic endeavor,
being driven by intuition towards conjectures and the highest heights of abstraction. You might prefer to study
mathematics as an act of formality and ceremony, ensuring each proof is precise, employs bulletproof reasoning, and
stands against all scrutiny. You might still prefer to approach math linguistically, trying to build ever better
descriptions and words to describe your intuition and perception of the underlying structures. You can focus on the
_vocabulary of thought_, the _grammar_ of your argument, and insodoing build up a rich lexicon of structures, arguments,
and ideas to attack novel problems.

It is this last methodology that I am going to encourage in the rest of this book. The other methods are valuable and
good. We might look to Erdos to see what happens when you simply climb as high as you can. We might look to Hilbert to
see what happens when you focus on the foundations and rigor.

We will have to keep an eye out for Mathematicians who follow the third way.

We have a natural target for our machinations, betweenesses.

# 2.1.0: Points arranged on a line

> Detail the problem, we saw in 1.4.0 how betweeness had to be threaded carefully, and we had to manage many individual
> hypotheses, even though they were all connected. Here we place 3.3 and prove it the hard way.

# 2.2.0: Points _arranged_ on a line

> The core idea, betweeness is ternary, arrangements are the natural n-ary extension of betweeness, design the
> arrangement structure -- a prop-valued structure which holds points and proofs about those points. This structure
> stands in place of the various betweeness hypotheses it absorbs; and we design tactics to clean up the environment of
> loose hypos in the environment, as well as Coe instances to unpack arrangements.

# 2.3.0: Arrangements in Anger

> Do some proofs that benefit from having arrangements -- we shouldn't need all of 3.3 to build arrangements, so
> corrolaries should be able to follow from the minimal construction very readily.

# 2.4.0: Arrangements and the Algebra of Betweeness

> Arrangements are to Betweenness what Groups are to their Elements. This points towards later categorification ideas,
> and reinforces the algebra/analysis/topology vs the categorical approach to mathematics. Categories _unify_ the
> approaches and provide a single framework to understand the classification, dissection, and connection theories of the
> object.

> In particular, introduce `organize!` and `arrangement` tactics here, and point out some of the code smells we see in
> 3.6

# 2.5.0: Analysis of Arrangments

> Since we have an algebraic structure, we can do analysis at it, let's break the structure apart and see what other
> structures are hiding within.

> 3.6 was doable but painful; we are still being bitten by the Line Naming problem. Our proofs are still literred with
> axiom references, but it is hard to find the right solution to a problem after it has been solved, we need other
> fodder, we look towards Pasch and 3.7 and see all the time being spent lugging line equality around, and sorting out
> which points go where. We still have two problems, but now it's 'constructing the 'right' arrangements' and 'line
> naming'. One of those is still harder than the other, so we focus on arrangement's properties -- we switch from
> Algebrist to Analyst and begin understanding the underlying structure that a collection of compatible betweenesses
> implies.

# 2.6.0: Untangling Betweeness

> We have spotted the lattice inside the Arrangement, we want to capture it, we have the tools now, let's try to reason
> about how it can be extracted and used as a metastructure. Emphasize an approach that is just 'normal ass
> datastructures' that we sort of informally prove relevant properties about. We end with an informal description of a
> tangling

After all this has been sussed out, what we have left is a statement like this:

"Given some proofstate, we can collect all the compatible betweenesses into structures that partially restrict a
specific arrangement of points as permitted by an implied lattice. This lattice is ultimately _the_ structure (we
conjecture) that points-on-a-line-up-to-mirror-symmetry have, and in some sense this is what it means to be _named
points on a line_ in the context of this axiomatization. The only issue is that an underspecified lattice structure
implies many _possible_ arrangements but not necessarily a _single_ arrangement; the remaining construction must be used
to identify and add to these structures until they're disambiguated."

Our goal in the next chapter is to do exactly that, build a structure that represents named points on a line and the
partial lattice built out of compatible betweeness hypotheses -- this structure can then be used to enumerate possible
arrangements (for a proof-by-cases), or in some circumstances be shown to be degenerate (allowing for ex-falso proofs).
In [GIYF], I call this structure a 'Tangling' of points on a line. Betweenesses "Untangle" the line.

