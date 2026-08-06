# 4.0.0 "Hewing our way out."

> Then, since this earth affords no joy to me,
> But to command, to cheque, to o'erbear such
> As are of better person than myself,
> I'll make my heaven to dream upon the crown,
> And, whiles I live, to account this world but hell,
> Until my mis-shaped trunk that bears this head
> Be round impaled with a glorious crown.
> And yet I know not how to get the crown,
> For many lives stand between me and home:
> And I,—like one lost in a thorny wood,
> That rends the thorns and is rent with the thorns,
> Seeking a way and straying from the way;
> Not knowing how to find the open air,
> But toiling desperately to find it out,—
> Torment myself to catch the English crown:
> And from that torment I will free myself,
> Or hew my way out with a bloody axe.

So we are entangled, we have a structure, we have no idea if it really works; but we are toiling desparately to find it
out. Let's return, momentarily, to the line naming problem.

The issue:

Given some number of distinct lines L, M, ...; and some number of points A, B, C, etc. in the same diagram, variously lying on L, M,
..., and coupled with the fact that frequently it is most convenient to refer to a line not by its abstract name (L, M,
...) but by distinct pairs of points on it (e.g., `the line A B` instead of `L`, if `A on L` and `B on L`), we have
encountered a combinatorial explosion of different names for the same object. In our intuitive world we 'know' that `AB`
and `L` are the same line and do not regard the rigor necessary to establish it; it is obvious. But in our new setting
we must explain and show work for every step.

We know, further, that arrangements of those points on a given line are the _most_ likely source of the thing we mine
for so frequently in our proofs -- contradictions. Geometry is _full_ of case-chasing and it would be _so_ nice to be
able to have a _single_ way to refer to the object that houses all the points, the valid arrangement(s) of those points,
and to somehow 'keep track' of whether or not the line has any valid arrangements left on it.

Wait a minute -- I'm talking about a Tangling, aren't I? Wouldn't it be nice if we could just... stick a tangling on
that abstract name? What happens if the same tangling is valid for two such names?

What if two separate tanglings are valid on the same name?

Maybe all this work we've been doing around betweeness is actually exactly the thing we've needed the whole time? What
if we didn't have two problems back in 1.5.0, what if we only ever had one?

Let's think like algebrists for a minute and classify:

# 4.1.0: What kinds of lines are there?

> Abstract vs Concrete Lines
> Fixed (two known points), Unfixed (no known points), and Semifixed (one known point)
> Rays and Segments

# 4.2.0: What kinds of tanglings are there?

> Valid/Invalid Tanglings
> - Validity by construction
> - Invalidity as ex falso
> Compatible/Incompatible
> - When can two tanglings be 'glued' together? -- when the points are on the same underlying line
> What is necessary for gluing?
> - Naively, "The two tanglings can be glued if all points in each are pairwise distinct and collinear"
> - Practically, "Two tanglings can be glued if all points are collinear, by forgetting in one any shared/nondistinct
>   points.
> - Minimally, "Two tanglings can be glued if any two distinct points of one are present in the other."
> - Formally, "Tanglings form a Sheaf via a simple Line Topology." -- though this is saved for the last section.

# 4.3.0: Building a better line abstraction.

> A line is a tangling. An abstract/unfixed line is the empty tangling, a semifixed/concrete line is a tangling with < 2
> points, and all other tanglings represent concrete, fixed lines.

> We do not need anything more than a tangling, as we'll see when we get to fibered categories over the tangling sheaf.

> We do an informal, prose proof first, then we formalize in lean in the next chapter

> Establish that Tanglings form a category, with the specific partial ordering of points given tangling being the
> objects; and morphisms if T is a subordering of T'. i.e., if T is a restriction of T' to some subset of points.

> Tanglings exists on a simple covering topology on the line they are defined on. You construct a cover by taking the
> largest segments contained in each component betweeness and joining them all together. Two tanglings on the same line
> are thus the union of their respective coverings, which will always contain all the relevant points.

> This topology satisfies the Grothendieck Topology for Tanglings to 'live on', and B2 ensures no invalid arrangement is
> allowed; our tactics and the proof carried by the Tangling object itself ensure consistency here.

> All this taken together means that Tanglings form a Sheaf on the Line topology we just defined. Sheaves are powerful
> tools in Category Theory, and we will see how valuable it is as a tool as we start to build up and use the machinery
> of category theory to take on our problems in Geometry.

# 4.4.0: Untangling

> Given a proofstate, we'll use tanglings to design an algorithm which systematically tries to 'grab' every betweeness
> and derive a minimal set of tangling objects which cover all the named points in the diagram. Lines and Tanglings are
> the same thing, and we'll see later how true this is as we pull individual substructures out using different
> categorical tools to cover Segments, Rays, Angles and Polygons. We'll give a heads up here before diving into the
> formal stuff and tactic building in the next chapter. This is just a sketch of the tactic's algorithm relying on our
> new understanding. if Line = Tangling, then if we name a line in some way it gets associated to a particular tangling
> -- right now they all collapse into the 'full line' tangling, later into various substructures as we build up our
> fibered category "Geometry"
