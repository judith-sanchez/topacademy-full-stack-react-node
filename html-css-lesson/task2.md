## Task 2

Calculate specificity of selectors:

1. `#container` (Specificity: 1)

   - Targets an element with the `id` attribute set to "container."

2. `div#container` (Specificity: 1)

   - Targets a `div` element with the `id` attribute set to "container."

3. `div[id=container]` (Specificity: 1)

   - Targets a `div` element with the `id` attribute set to "container," but it uses an attribute selector.
   - Same behavior as the previous.

4. `main .section *` (Specificity: 2)

   - Targets all elements (\*) that are descendants of an element with a class of "section," which is itself a descendant of a `main` element.

5. `.form > .row:hover` (Specificity: 2)

   - Targets elements with a class of "row" that are direct children of an element with a class of "form" and are in a hovered state.

6. `#container .row.flex` (Specificity: 2)

   - Targets elements with a class of "row" and "flex" that are descendants of an element with the `id` attribute set to "container."

7. `#section ~ aside > .span` (Specificity: 3)

   - Targets elements with a class of "span" that are direct children of an `aside` element that shares the same parent as an element with the `id` attribute set to "section."

8. `#content ul > li + li` (Specificity: 3)

   - Targets the second and subsequent `li` elements that are direct children of a `ul` element inside an element with the `id` attribute set to "content."

9. `form .section input[disabled]` (Specificity: 3)
   - Targets `input` elements with the `disabled` attribute that are descendants of an element with a class of "section," which is itself a descendant of a `form` element.
