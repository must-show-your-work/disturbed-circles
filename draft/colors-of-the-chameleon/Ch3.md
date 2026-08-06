# 3.0.0: "No Kingdom"

> Well, say there is no kingdom then for Richard;
> What other pleasure can the world afford?
> I'll make my heaven in a lady's lap,
> And deck my body in gay ornaments,
> And witch sweet ladies with my words and looks.
> O miserable thought! and more unlikely
> Than to accomplish twenty golden crowns!


> While we continue to ignore our line naming problem, we lay out our Tangling structure

# 3.1.0: Designing the structure

```lean
structure Tangling where
  points : Finset Point
  col : Collinear points
  known : Finset ((a : Point) ×' (b : Point) ×' (c : Point) ×' Between a b c)
```

The structure is simple, it has three parts, a finite set of named points (which implies all contained points are
distinct), the fact that those points are collinear, and some finite set of known betweeness conditions that draw from
the set of points. We maintain the coherence of points by construction. Adding a betweeness to the list requires it to
be 'woven' into the tangling by showing it is collinear with the other points in the tangling by some means. This allows
us to compute all the possible _untanglings_ of this structure, that is, valid Arrangements that could arise from this
specific tangling. This implies a useful metric; _how tangled up is a given tangling?_ If there are only a few cases, we
can just dispatch over them, if there are many, we can potentially identify critical betweeness hypos that would be most
effective in paring down the structure (or resolving it). If there are no valid tanglings, then we have found an
impossible construction. All of this without having to use anything more than very basic incidence and betweeness.

> Prove the various properties of the structure

# 3.2.0: Making use of Tanglings

> Reprove some prior theorem that doesn't depend on any details of the tangling construction, e.g., not the main part of
> 3.3.

# 3.3.0: Lightening the structure

> Here we try to tear out the parts of theorems we don't need. If we reduce betweeneess to a 'to the left'/'to the
> right' constraint system where A-B-C becomes "(A is left of B XOR B is left of A) AND (B is left of C XOR C is left of
> B)", we capture all the details without needing anything other than colinearity and a different resolution algorithm,
> pushing arrangements and tanglings 'down' beneath the other theorems by unpacking essential structure _away_ from the
> intuitive 'betweeness' concept. This lays bare the partial order

# 3.4.0: Categorizing Tanglings

> Here I make a nod toward the oncoming sea. We take stock of what we've proved so far and see how it has affected our
> proofs, they are cleaner and simpler but there is a nagging question:
>
> How do we know this is all okay? What structure did we just build? Are we _sure_ we trust Lean here? What if we've
> introduced something unsound?
>
> We've built on our intuition alone, we thought like engineers, trying to build something efficient to dispatch a
> problem. But engineers build faulty buildings and write buggy software -- what if our _mathematics_ has a bug? What if
> our _logic_ is faulty?
>
> We marvel at our beautiful construction, but worry it restricts us to the empty set, we wallow in our self-pity, and
> proceed to intermission.
