function getHelpIssuesPageContent() {
    const contentTemplate = 
`
<div style="max-width: 800px">
    <h5 style="margin-top: 40px">What is an issue?</h5>
    <p>
        Issues are detected unique encounters of rules that might have to be addressed to re-platform an application to Azure. Each issue (rule) has its own unique ID, severity and story points. 
    </p>
    <p>There could be multiple incidents for each issue in one or more locations like code files or binaries.</p>
</div>
`;

    return {
        "content": contentTemplate
    };
}
