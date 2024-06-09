function getHelpSeverityPageContent() {
    const contentTemplate = 
`
<div style="max-width: 800px">
    <h5 style="margin-top: 40px">What is issue Severity?</h5>
    <p>In addition to the Story points, migration tasks is assigned a severity that indicates whether the task must be completed or can be postponed.</p>

    <h5 style="margin-top: 40px">Severity levels</h5>
    <table class="table table-without-top-border">
        <thead>
            <tr>
                <th>Severity level</th>
                <th>Description</th>
            </tr>
        </thead>
        <tr>
            <td>Information</td>
            <td>The issue was raised only for informational purpose and is not required to be resolved.</td>
        </tr>
        <tr>
            <td>Potential</td>
            <td>We were not sure if it is necessarily a blocking problem, but just in case raised your attention.</td>
        </tr>
        <tr>
            <td>Optional</td>
            <td>The issue discovered is real issue fixing which could improve the app after migration, however it is not blocking, it could be resolved or not.</td>
        </tr>
        <tr>
            <td>Mandatory</td>
            <td>The issue has to be resolved for the migration to be successful.</td>
        </tr>
    </table>


    <p><i>* The motivation of using story points and severity was taken from a java migration tool <a href="https://github.com/windup/windup">Windup</a></i></p>
</div>
`;

    return {
        "content": contentTemplate
    };
}
