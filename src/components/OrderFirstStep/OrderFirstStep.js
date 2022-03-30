

export function OrderFirstStep(props) {
    return (
        <div>
            <form>
                <div>
                    <label>
                        firstName
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        secondName
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        country
                       <select>
                           <option>ua</option>
                           <option>ru</option>
                           <option>uk</option>
                           <option>en</option>
                       </select>
                    </label>
                </div>
                <div>
                    <label>
                        city
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        adress
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        adress2
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        email
                        <input type="text" />
                    </label>
                </div>
                <div>
                        delivery type
                    <label>
                        post
                        <input type="radio" name="delivery"/>
                    </label>
                    <label>
                        self deliver
                        <input type="radio" name="delivery"/>
                    </label>
                </div>
                <div>
                    <label>
                        dont call me
                        <input type="checkbox"  />
                    </label>
                </div>
                <div>
                    <label>
                       comment
                        <textarea ></textarea>
                    </label>
                </div>
            </form>
        </div>
    );
}

