import { Headline } from "./Headline"

export const Background = () => {
    return(
        <div className="text-center col-sm-12" style={{paddingLeft: 300, paddingRight: 300, fontSize:21}}>
        <Headline headline="Who are we?" />
        <p>
            The ROTO Centre was established as a non-
            profit organization in 2016 when Mpho

            Matthews, the founder, joined up with other
            individuals wanting to create a safe place
            with educational activities and support
            services that would cater to the specific
            needs of special needs children. The need
            for such an organization was realized
            through the founder’s own personal
            experience of having a child that has
            special needs. To date, ROTO is the only
            special needs day care centre in Barkley
            West, serving more than 20 families each
            day between Monday to Saturday with a
            variety of programs and services.
        </p>
    </div>
    )
}